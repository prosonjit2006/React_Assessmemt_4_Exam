import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup.string().required("Category Name is Required"),
  description: yup.string().required("Description is Required"),
});
