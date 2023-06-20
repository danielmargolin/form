import css from "./Form.module.css";

const Form = ({ state, onChange, children }) => {
  return <div className={css["container"]}>{children}</div>;
};

export default Form;
