import { useContext } from 'react';
import { TermContext, CoursesContext } from '../../context';

const CourseCard = ({ id, term, number, program, meets, title }) => {
  const { termState } = useContext(TermContext);
  const shouldHidden = termState !== 'all' && termState !== term.toLowerCase();

  const { coursesState, coursesDispatch } = useContext(CoursesContext);
  const selected = coursesState.has(id)
    ? 'course-list__course-card-selected'
    : '';

  return (
    <div
      className={`card course-list__course-card ${selected}`}
      hidden={shouldHidden}
      onClick={() => coursesDispatch({ type: 'toggle', payload: id })}
    >
      <div className="course-list__course-card-info">
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
