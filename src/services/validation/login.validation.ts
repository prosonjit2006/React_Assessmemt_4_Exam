import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required("Email is Required"),
  password: yup.string().min(6, "Minmun 6 ").required("Password is Required"),
  // password:yup.string().min(6,"Minmun 6 ").matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,"Password must be conatin atleast one upper and one special character").required("Password is Required"),
});
