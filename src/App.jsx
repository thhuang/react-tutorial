import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReducer } from 'react';

import { useJsonQuery } from './utilities/fetch';
import {
  CoursesDisplayContext,
  coursesDisplayReducer,
  initialCoursesDisplay,
  CoursesContext,
  coursesReducer,
  initialCourses,
  TimeIntervalsContext,
  timeIntervalsReducer,
  initialTimeIntervals,
} from './context';
import Banner from './components/Banner';
import Modal from './components/modal/Modal';
import CourseList from './components/courselist/CourseList';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Landing />
  </QueryClientProvider>
);

const Landing = () => {
  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  const [coursesDisplayState, coursesDisplayDispatch] = useReducer(
    coursesDisplayReducer,
    initialCoursesDisplay
  );
  const [coursesState, coursesDispatch] = useReducer(
    coursesReducer,
    initialCourses
  );
  const [timeIntervalsState, timeIntervalsDispatch] = useReducer(
    timeIntervalsReducer,
    initialTimeIntervals
  );

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <div className="container">
      <CoursesContext.Provider
        value={{ coursesState: coursesState, coursesDispatch: coursesDispatch }}
      >
        <CoursesDisplayContext.Provider
          value={{
            coursesDisplayState: coursesDisplayState,
            coursesDisplayDispatch: coursesDisplayDispatch,
          }}
        >
          <TimeIntervalsContext.Provider
            value={{
              timeIntervalsState: timeIntervalsState,
              timeIntervalsDispatch: timeIntervalsDispatch,
            }}
          >
            <Banner title={data.title} />
            <Modal courses={data.courses} open={coursesDisplayState} />
            <CourseList courses={data.courses} />
          </TimeIntervalsContext.Provider>
        </CoursesDisplayContext.Provider>
      </CoursesContext.Provider>
    </div>
  );
};

export default App;
