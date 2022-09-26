const CourseList = ({ courses }) => (
  <div>
    {Object.entries(courses).map(([_, info]) => (
      <div>
        {info.term} CS {info.number}: {info.title}
      </div>
    ))}
  </div>
);

export default CourseList;
