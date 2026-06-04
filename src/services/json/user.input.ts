
import type { UserPayload } from "../../typescript/interface/user.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const Userinputfield: Array<
  Omit<DynamicInputProps<UserPayload>, "register" | "errors">
> = [
  {
    name: "role",
    label: "Select role",
    type: "text",
    required: true,
  },
  // {
  //   name: "name",
  //   label: "Enter category name",
  //   type: "text",
  //   required: true,
  // },
  // {
  //   name: "email",
  //   label: "Enter email address",
  //   type: "text",
  //   required: true,
  // },
];
