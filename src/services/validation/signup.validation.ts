import * as yup from "yup";

export const signupSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().email().required("Email is Required"),
  password: yup
    .string()
    .min(6, "Minmun 6 ")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
      "Password must be conatin atleast one upper and one special character",
    )
    .required("Password is Required"),
});
