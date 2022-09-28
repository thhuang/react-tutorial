import { useContext } from 'react';
import { TermContext } from '../../context';

const TermSelector = () => {
  const { state, dispatch } = useContext(TermContext);

  return (
    <div className="course-list__terms">
      <div
        className={
          'course-list__term-btn' + (state === 'fall' ? ' selected' : '')
        }
        onClick={() => dispatch({ type: state === 'fall' ? 'reset' : 'fall' })}
      >
        Fall
      </div>
      <div
        className={
          'course-list__term-btn' + (state === 'winter' ? ' selected' : '')
        }
        onClick={() =>
          dispatch({ type: state === 'winter' ? 'reset' : 'winter' })
        }
      >
        Winter
      </div>
      <div
        className={
          'course-list__term-btn' + (state === 'spring' ? ' selected' : '')
        }
        onClick={() =>
          dispatch({ type: state === 'spring' ? 'reset' : 'spring' })
        }
      >
        Spring
      </div>
    </div>
  );
};

export default TermSelector;
