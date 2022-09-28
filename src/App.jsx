import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useJsonQuery } from './utilities/fetch';
import Banner from './components/Banner.jsx';
import CourseList from './components/courselist/CourseList.jsx';

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

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <div className="container">
      <Banner title={data.title}></Banner>
      <CourseList courses={data.courses}></CourseList>
    </div>
  );
};

export default App;
