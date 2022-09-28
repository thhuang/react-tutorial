import { useContext } from 'react';
import { TermContext } from '../../context';

const CourseCard = ({ term, number, program, meets, title }) => {
  const { state } = useContext(TermContext);
  const shouldHidden = state !== 'all' && state !== term.toLowerCase();

  return (
    <div className="card course-list__course-card" hidden={shouldHidden}>
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
