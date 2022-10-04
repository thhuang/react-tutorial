import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { meets2intervals, insertInterval } from '../../utilities/time';
import {
  TermContext,
  CoursesContext,
  TimeIntervalsContext,
} from '../../context';

const CourseCard = ({ id, term, number, program, meets, title }) => {
  const { termState } = useContext(TermContext);
  const shouldHidden = termState !== 'all' && termState !== term.toLowerCase();

  const { coursesState, coursesDispatch } = useContext(CoursesContext);
  const isSelected = coursesState.has(id);

  const { timeIntervalsState, timeIntervalsDispatch } =
    useContext(TimeIntervalsContext);

  const termKey = term.toLowerCase();
  let newIntervals = timeIntervalsState[termKey];
  let hasConflict = false;
  const intervals = meets2intervals(meets);
  for (const interval of intervals) {
    newIntervals = insertInterval(newIntervals, interval);
    if (newIntervals === null) {
      if (!isSelected) hasConflict = true;
      break;
    }
  }

  const selected = isSelected ? 'course-list__course-card-selected' : '';
  const conflict =
    hasConflict && !isSelected ? 'course-list__course-card-conflict' : '';

  return (
    <div
      className={`card course-list__course-card ${selected} ${conflict}`}
      hidden={shouldHidden}
      onClick={() => {
        if (hasConflict) return;
        coursesDispatch({ type: 'toggle', payload: id });
        isSelected
          ? timeIntervalsDispatch({
              type: 'remove',
              payload: { term: termKey, starts: intervals.map(([l, _]) => l) },
            })
          : timeIntervalsDispatch({
              type: 'update',
              payload: { term: termKey, intervals: newIntervals },
            });
      }}
    >
      <div className="course-list__course-card-info">
        <div>
          <Link to={`/courses/${id}`}>
            <i className="bi bi-pencil-square course-list__course-card-edit"></i>
          </Link>
        </div>
        <h3>
          {term} {program} {number}
        </h3>
        {title}
      </div>
      <hr />
      <div className="course-list__course-card-meets">{meets}</div>
    </div>
  );
};

export default CourseCard;
