import type { Productformvalue } from "../../typescript/interface/product.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const productinputfield: Array<
  Omit<DynamicInputProps<Productformvalue>, "register" | "errors">
> = [
  {
    name: "name",
    label: "Enter Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Enter Email Address",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Enter Password",
    type: "password",
    required: true,
  },
];
