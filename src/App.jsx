import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import { useRtdbData } from './utilities/firebase';
import { useProfile } from './utilities/profile';
import {
  CoursesDisplayContext,
  coursesDisplayReducer,
  initCoursesDisplay,
  CoursesContext,
  coursesReducer,
  initCourses,
  TimeIntervalsContext,
  timeIntervalsReducer,
  initTimeIntervals,
} from './context';
import Banner from './components/Banner';
import Modal from './components/modal/Modal';
import CourseList from './components/courselist/CourseList';
import CourseForm from './components/courseform/CourseForm';
import Navigation from './components/Navigation/Navigation';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);

const Main = () => {
  const [data, isLoading] = useRtdbData('course/');
  if (isLoading) return <div>Loading ...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing data={data} />} />
        <Route path="/courses/:id" element={<CourseForm data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

const Landing = ({ data }) => {
  const [coursesDisplayState, coursesDisplayDispatch] = useReducer(
    coursesDisplayReducer,
    initCoursesDisplay()
  );
  const [coursesState, coursesDispatch] = useReducer(
    coursesReducer,
    initCourses()
  );
  const [timeIntervalsState, timeIntervalsDispatch] = useReducer(
    timeIntervalsReducer,
    initTimeIntervals()
  );
  const [{ user, isAdmin }] = useProfile();

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
            <div className="h-2" />
            <Navigation user={user} />
            <Banner title={data.title} />
            <Modal courses={data.courses} />
            <CourseList courses={data.courses} admin={isAdmin ? user : null} />
          </TimeIntervalsContext.Provider>
        </CoursesDisplayContext.Provider>
      </CoursesContext.Provider>
    </div>
  );
};

export default App;
