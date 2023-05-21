import { createContext } from "react";

export const FormContext = createContext({});

const Form = ({ state, onChange, children }) => {
  return (
    <FormContext.Provider value={{state, onChange}}>
      {children}
    </FormContext.Provider>
  );
};

export default Form;
