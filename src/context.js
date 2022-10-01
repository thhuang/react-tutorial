import { createContext } from 'react';
import { insertInterval, removeInterval } from './utilities/time';

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

export const initialTimeIntervals = { fall: [], winter: [], spring: [] };

export const timeIntervalsReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const updatedState = state;
      updatedState[action.payload.term] = action.payload.intervals;
      return updatedState;
    case 'remove':
      const removedState = state;
      removedState[action.payload.term] = action.payload.starts.reduce(
        (prev, start) => removeInterval(prev, start),
        removedState[action.payload.term]
      );
      return removedState;
    default:
      throw new Error();
  }
};

export const TimeIntervalsContext = createContext();
