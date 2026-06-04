import type { Loginformvalue } from "../../typescript/interface/auth.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const logininputfield: Array<
  Omit<DynamicInputProps<Loginformvalue>, "register" | "errors">
> = [
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
