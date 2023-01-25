import { createForm } from "@use-form/use-form";

export const usePersonForm = createForm({
  initialValues: {
    firstName: "",
    lastName: "",
    age: null,
    address: {
      street: "",
      city: "",
      zipCode: ""
    }
  }
  //mode: "debounce"
});
