const Checkbox = ({ value, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
};

export default Checkbox;
