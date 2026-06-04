import type { CategoryPayload } from "../../typescript/interface/category.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const Categoryinputfield: Array<
  Omit<DynamicInputProps<CategoryPayload>, "register" | "errors">
> = [
  {
    name: "name",
    label: "Enter category name",
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: "Enter description",
    type: "text",
    required: true,
  },
];
