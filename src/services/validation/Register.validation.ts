import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().email().required("Email is Required"),
  phone: yup
    .string()
    .min(10, "Min 10 numbers is ")
    .required("Phone Number is Required"),
  password: yup
    .string()
    .min(6, "Minmun 6 ")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
      "Password must be conatin atleast one upper and one special character",
    )
    .required("Password is Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be matched")
    .required("ConfirmPassowrd is Required"),
  gender: yup.string().required("Gender is Required"),
  profession: yup.string().required("Profession is Required"),
  // specialization:yup.string().optional(),
  // programming:yup.array().min(1,"Minimum 1 programming is required").required(),
  // term:yup.boolean().oneOf([true],"You Must Accept Terms & Conditions"),
  // image:yup.mixed().required("Image is required").optional()
});
