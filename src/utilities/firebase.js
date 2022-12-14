import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

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

export const useRtdbData = (path, dependency) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onValue(ref(db, path), (snapshot) => {
        setData(snapshot.val());
        setIsLoading(false);
      }),
    [dependency]
  );

  return [data, isLoading];
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

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(app), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(app), setUser));

  return [user];
};
