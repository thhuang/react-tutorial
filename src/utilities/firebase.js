import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

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

export const useRtdbUpdate = (path, callback) => {
  const [error, setError] = useState(null);

  const update = (data) => {
    set(ref(db, path), data)
      .then(() => callback())
      .catch((err) => setError(err.message));
  };

  return [update, error];
};
