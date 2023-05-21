const Input = ({ type = "text", value, onChange = () => {} }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return <input type={type} value={value} onChange={onInputChange} />;
};

export default Input;
