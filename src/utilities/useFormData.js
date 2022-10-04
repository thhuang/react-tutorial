import { useState } from 'react';

export const useFormData = (validator = null, values = {}) => {
  const [state, setState] = useState(() => ({ values }));

  const change = (event) => {
    const { id, value } = event.target;
    const error = validator ? validator(id, value) : '';
    event.target.setCustomValidity(error);

    const values = { ...state.values, [id]: value };
    const errors = { ...state.errors, [id]: error };
    const hasError = Object.values(errors).some((x) => x !== '');
    setState(hasError ? { values, errors } : { values });
  };

  return [state, change];
};
