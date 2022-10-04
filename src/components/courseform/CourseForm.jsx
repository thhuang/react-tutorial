import { useParams, useNavigate } from 'react-router-dom';
import { getCourseId } from '../../utilities/course';

// import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../../utilities/useFormData';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return /^(M|Tu|W|Th|F)+ ([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(
        val
      )
        ? ''
        : 'must contain days and start-end';
    default:
      return '';
  }
};

const InputField = ({ name, text, state, change }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      defaultValue={state.values?.[name]}
      onChange={change}
    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({ message, disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-dark me-2"
        onClick={() => navigate(-1)}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="btn btn-primary me-auto"
        disabled={disabled}
      >
        Submit
      </button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseForm = ({ data }) => {
  const { id } = useParams();

  const course = Object.entries(data.courses).find(
    ([_, v]) => getCourseId(v.term, v.number) == id
  );

  if (!course) return <div>Invalid Course ID</div>;

  const info = course[1];
  const title = info.title;
  const meets = info.meets;

  // const [update, result] = useDbUpdate(`/users/${user.id}`);
  const [state, change] = useFormData(validateCourseData, info);
  const submit = (event) => {
    event.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <div className="container">
      <h2>
        Course: {info.term} CS {info.number}
      </h2>
      <form
        onSubmit={submit}
        noValidate
        className={state.errors ? 'was-validated' : null}
      >
        <InputField name="title" text="Title" state={state} change={change} />
        <InputField name="meets" text="Meets" state={state} change={change} />
        {/* <ButtonBar message={result?.message} /> */}
        <ButtonBar disabled={state.errors !== undefined} />
      </form>
    </div>
  );
};

export default CourseForm;
