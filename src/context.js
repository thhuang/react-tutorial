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
