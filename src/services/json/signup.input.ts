import type { signupformvalue } from "../../typescript/interface/auth.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const signupinputfield: Array<
  Omit<DynamicInputProps<signupformvalue>, "register" | "errors">
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
