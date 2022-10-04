import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyABeYo5-8IXKUIbVV5sVF8zrbQwwvFHt2Y',
  authDomain: 'thhuang-react-tutorial.firebaseapp.com',
  projectId: 'thhuang-react-tutorial',
  storageBucket: 'thhuang-react-tutorial.appspot.com',
  messagingSenderId: '133215145432',
  appId: '1:133215145432:web:fca79eb9ce1c65cb0ff6ad',
  databaseURL: 'https://thhuang-react-tutorial-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// export const writeCourseData = (data) => {
//   const [data, isLoading, error] = useJsonQuery(
//     'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
//   );

//   if (error) return <div>Error: {error}</div>;
//   if (isLoading) return <div>Loading ...</div>;
//   console.log(data);
//   set(ref(db, 'course/'), data);
// };

export const readCourseData = () => {};

export const useRtdbData = (path) => {
  const [data, setData] = useState();

  useEffect(
    () =>
      onValue(ref(db, path), (snapshot) => {
        setData(snapshot.val());
      }),
    []
  );

  return data;
};
