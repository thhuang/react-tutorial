import { useReducer } from 'react';

import './courseList.css';
import { TermContext, termReducer, initialTerm } from '../../context';
import { CoursesContext, coursesReducer, initialCourses } from '../../context';
import CourseCard from './CourseCard';
import TermSelector from './TermSelector';

const CourseList = ({ courses }) => {
  const [termState, termDispatch] = useReducer(termReducer, initialTerm);
  const [coursesState, coursesDispatch] = useReducer(
    coursesReducer,
    initialCourses
  );

  return (
    <TermContext.Provider
      value={{ termState: termState, termDispatch: termDispatch }}
    >
      <CoursesContext.Provider
        value={{ coursesState: coursesState, coursesDispatch: coursesDispatch }}
      >
        <TermSelector />
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
      </CoursesContext.Provider>
    </TermContext.Provider>
  );
};

export default CourseList;
