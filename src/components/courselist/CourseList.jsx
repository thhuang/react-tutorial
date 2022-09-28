import { useReducer } from 'react';

import './courseList.css';
import { TermContext, termReducer, initialTerm } from '../../context';
import CourseCard from './CourseCard';
import TermSelector from './TermSelector';

const CourseList = ({ courses }) => {
  const [termState, termDispatch] = useReducer(termReducer, initialTerm);
  return (
    <TermContext.Provider value={{ state: termState, dispatch: termDispatch }}>
      <TermSelector />
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
    </TermContext.Provider>
  );
};

export default CourseList;
