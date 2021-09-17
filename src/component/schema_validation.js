import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .notOneOf([""])
    .oneOf(["small", "medium", "large"])
    .required("Please select a size"),
});

export const schema_validate_input = (
  name,
  value,
  stateValidation,
  set_stateValidation
) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      //return validation success
      set_stateValidation({ ...stateValidation, [name]: "" });
    })
    .catch((err) => {
      //return validation failure
      set_stateValidation({
        ...stateValidation,
        [name]: err.errors[0],
      });
    });
};

export const schema_validate_form = (
  stateFormData,
  set_stateFormValidation
) => {
  formSchema.isValid(stateFormData).then((valid) => {
    set_stateFormValidation(valid);
  });
};
