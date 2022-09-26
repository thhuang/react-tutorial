import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Banner from './components/Banner.jsx';
import CourseList from './components/courselist/CourseList.jsx';

const schedule = {
  title: 'CS Courses for 2018-2019',
  courses: {
    F101: {
      term: 'Fall',
      number: '101',
      meets: 'MWF 11:00-11:50',
      title: 'Computer Science: Concepts, Philosophy, and Connections',
    },
    F110: {
      term: 'Fall',
      number: '110',
      meets: 'MWF 10:00-10:50',
      title: 'Intro Programming for non-majors',
    },
    S313: {
      term: 'Spring',
      number: '313',
      meets: 'TuTh 15:30-16:50',
      title: 'Tangible Interaction Design and Learning',
    },
    S314: {
      term: 'Spring',
      number: '314',
      meets: 'TuTh 9:30-10:50',
      title: 'Tech & Human Interaction',
    },
  },
};

const App = () => (
  <div className="container">
    <Banner title={schedule.title}></Banner>
    <CourseList courses={schedule.courses}></CourseList>
  </div>
);

export default App;
