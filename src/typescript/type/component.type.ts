import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export type FieldType = "text" | "email" | "password" | "textarea";

export type DynamicInputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: FieldType | undefined;
  rows?: number;
  required?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};
