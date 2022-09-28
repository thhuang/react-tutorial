import './courseList.css';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {Object.entries(courses).map(([_, info]) => (
      <CourseCard
        key={info.term + info.number}
        term={info.term}
        program="CS"
        number={info.number}
        meets={info.meets}
        title={info.title}
      />
    ))}
  </div>
);

const CourseCard = ({ term, number, program, meets, title }) => (
  <div className="course-card card">
    <div className="course-card-info">
      <h3>
        {term} {program} {number}
      </h3>
      {title}
    </div>
    <hr />
    <div className="course-card-meets">{meets}</div>
  </div>
);

export default CourseList;
