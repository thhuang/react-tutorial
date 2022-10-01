import { useReducer, useContext } from 'react';

import './courseList.css';
import {
  TermContext,
  termReducer,
  initialTerm,
  CoursesDisplayContext,
} from '../../context';
import CourseCard from './CourseCard';
import TermSelector from './TermSelector';

const CourseList = ({ courses }) => {
  const [termState, termDispatch] = useReducer(termReducer, initialTerm);
  const { coursesDisplayDispatch } = useContext(CoursesDisplayContext);

  return (
    <TermContext.Provider
      value={{ termState: termState, termDispatch: termDispatch }}
    >
      <div className="course-list-header">
        <TermSelector />
        <div
          className="course-list-schedule course-list__btn"
          onClick={() => coursesDisplayDispatch({ type: 'toggle' })}
        >
          Schedule
        </div>
      </div>
      <div className="course-list">
        {Object.entries(courses).map(([_, info]) => {
          const id = info.term + info.number;
          return (
            <CourseCard
              key={id}
              id={id}
              term={info.term}
              program="CS"
              number={info.number}
              meets={info.meets}
              title={info.title}
            />
          );
        })}
      </div>
    </TermContext.Provider>
  );
};

export default CourseList;
