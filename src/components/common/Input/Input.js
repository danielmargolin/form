import css from "./Input.module.css";

const Input = ({ type = "text", value, onChange = () => {} }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={type}
      className={css["input"]}
      value={value}
      onChange={onInputChange}
    />
  );
};

export default Input;
