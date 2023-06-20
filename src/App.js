import { useState } from "react";

import "./App.css";

import Form from "./components/Form/Form";
import FormField from "./components/FormField/FormField";

function App() {
  const [formState, setFormState] = useState({
    name: "Daniel",
    lastName: "Margolin",
  });
  return (
    <div>
      <Form state={formState} onChange={setFormState}>
        <FormField label="Name" type="input" path="name" />
        <FormField label="Last Name" type="input" path="lastName" />
        <FormField label="Is Developer" type="checkbox" path="isDev" />
      </Form>
    </div>
  );
}

export default App;
