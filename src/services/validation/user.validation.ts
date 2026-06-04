import * as yup from "yup";

export const userSchema = yup.object({
  // name: yup.string().required("Name is Required"),
  // email: yup.string().required("Email is Required").email('Enter a valid email address'),
  role: yup.string().required('Role is required')
});
