import { useState } from "react";

import "./App.css";

import Form from "./components/Form/Form";
import FormField from "./components/FormField/FormField";

function App() {
  const [formState, setFormState] = useState({ name: "daniel" });
  return (
    <div>
      <Form state={formState} onChange={setFormState}>
        <div>
        <FormField
          type="input"
          path="name"
        />
        </div>
        <div>
        <FormField
          type="checkbox"
          path="isActive"
        />
        </div>
      </Form>
    </div>
  );
}

export default App;
