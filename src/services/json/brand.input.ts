import type { Brandformvalue } from "../../typescript/interface/brand.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const Brandinputfield: Array<
  Omit<DynamicInputProps<Brandformvalue>, "register" | "errors">
> = [
  {
    name: "name",
    label: "Enter Name",
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
