import css from "./FormField.module.css";

import Input from "../common/Input";
import Checkbox from "../common/Checkbox";

const COMPONENTS_MAP = { input: Input, checkbox: Checkbox };

const FormField = ({ label, type, path }) => {

  const Component = COMPONENTS_MAP[type];

  return (
    <div>
      <label className={css["label"]}>{label}:</label>
      <div className={css["form-field-container"]}>
        <Component />
      </div>
    </div>
  );
};

export default FormField;
