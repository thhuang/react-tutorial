import { createContext } from 'react';

export const initialTerm = 'all';

export const termReducer = (state, action) => {
  switch (action.type) {
    case 'fall':
      return 'fall';
    case 'winter':
      return 'winter';
    case 'spring':
      return 'spring';
    case 'reset':
      return initialTerm;
    default:
      throw new Error();
  }
};

export const TermContext = createContext();

export const initialCourses = new Set();

export const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      const newState = new Set(state);
      newState.has(action.payload)
        ? newState.delete(action.payload)
        : newState.add(action.payload);
      return newState;
    case 'reset':
      return initialCourses;
    default:
      throw new Error();
  }
};

export const CoursesContext = createContext();

export const initialCoursesDisplay = false;

export const coursesDisplayReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return !state;
    default:
      throw new Error();
  }
};

export const CoursesDisplayContext = createContext();
