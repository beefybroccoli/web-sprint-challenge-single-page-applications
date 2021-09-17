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
  input_name,
  input_value,
  input_stateValidation,
  input_set_stateValidation
) => {
  yup
    .reach(formSchema, input_name)
    .validate(input_value)
    .then(() => {
      //return validation success
      input_set_stateValidation({ ...input_stateValidation, [input_name]: "" });
    })
    .catch((err) => {
      //return validation failure
      input_set_stateValidation({
        ...input_stateValidation,
        [input_name]: err.errors[0],
      });
    });
};

export const schema_validate_form = (
  input_stateFormData,
  input_set_stateFormValidation
) => {
  formSchema.isValid(input_stateFormData).then((valid) => {
    input_set_stateFormValidation(valid);
  });
};
