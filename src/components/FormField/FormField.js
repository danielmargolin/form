import { useContext } from "react";

import Input from "../Input";
import Checkbox from "../Checkbox/Checkbox";
import {FormContext} from '../Form/Form'

const COMPONENTS_MAP = { input: Input, checkbox: Checkbox };

const FormField = ({ type, path }) => {
  const {state, onChange} = useContext(FormContext)

  const Component = COMPONENTS_MAP[type];

  const onFieldChange = (value) => {
    onChange({ ...state, [path]: value });
  };

  return <Component value={state[path]} onChange={onFieldChange} />;
};

export default FormField;
