import { useContext } from 'react';
import './modal.css';
import { CoursesDisplayContext, CoursesContext } from '../../context';

const Modal = ({ courses }) => {
  const { coursesDisplayState, coursesDisplayDispatch } = useContext(
    CoursesDisplayContext
  );
  const { coursesState } = useContext(CoursesContext);
  const hasCourses = coursesState.size > 0;

  return (
    <div
      className={`modal ${coursesDisplayState ? 'modal-show' : ''}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        coursesDisplayDispatch({ type: 'toggle' });
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={() => coursesDisplayDispatch({ type: 'toggle' })}
            />
          </div>
          <div className="modal-body">
            {!hasCourses ? (
              'Select a course by clicking on the course card.'
            ) : (
              <ul>
                {Object.entries(courses).map(([_, info]) => {
                  const id = info.term + info.number;
                  if (!coursesState.has(id)) return;
                  return (
                    <li key={id} className="mb-1">
                      [{info.term} CS {info.number}] {info.title}
                      <br />
                      {info.meets}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
