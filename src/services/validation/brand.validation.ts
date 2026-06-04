import * as yup from "yup";

export const brandSchema = yup.object({
  name: yup.string().required("Name is Required"),
  description: yup.string().required("Description is Required"),
});
