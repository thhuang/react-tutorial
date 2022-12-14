import { useContext } from 'react';
import { TermContext } from '../../context';

const TermSelector = () => {
  const { termState, termDispatch } = useContext(TermContext);

  return (
    <div className="course-list__terms">
      <div
        data-cy="fall"
        className={
          'course-list__btn' + (termState === 'fall' ? ' selected' : '')
        }
        onClick={() =>
          termDispatch({ type: termState === 'fall' ? 'reset' : 'fall' })
        }
      >
        Fall
      </div>
      <div
        data-cy="winter"
        className={
          'course-list__btn' + (termState === 'winter' ? ' selected' : '')
        }
        onClick={() =>
          termDispatch({ type: termState === 'winter' ? 'reset' : 'winter' })
        }
      >
        Winter
      </div>
      <div
        data-cy="spring"
        className={
          'course-list__btn' + (termState === 'spring' ? ' selected' : '')
        }
        onClick={() =>
          termDispatch({ type: termState === 'spring' ? 'reset' : 'spring' })
        }
      >
        Spring
      </div>
    </div>
  );
};

export default TermSelector;
