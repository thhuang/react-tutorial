import { useReducer, useContext } from 'react';

import './courseList.css';
import {
  TermContext,
  termReducer,
  initTerm,
  CoursesDisplayContext,
} from '../../context';
import CourseCard from './CourseCard';
import TermSelector from './TermSelector';
import { getCourseId } from '../../utilities/course';

const CourseList = ({ courses, admin }) => {
  const [termState, termDispatch] = useReducer(termReducer, initTerm());
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
          const id = getCourseId(info.term, info.number);
          return (
            <CourseCard
              key={id}
              id={id}
              term={info.term}
              program="CS"
              number={info.number}
              meets={info.meets}
              title={info.title}
              admin={admin}
            />
          );
        })}
      </div>
    </TermContext.Provider>
  );
};

export default CourseList;
