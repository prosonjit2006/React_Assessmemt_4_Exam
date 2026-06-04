import * as yup from "yup"

export const newsSchema = yup.object({
    title:yup.string().required("Title is Required"),
    content:yup.string().required("Content is Required"),
    category:yup.string().required("Category is Required"),
})