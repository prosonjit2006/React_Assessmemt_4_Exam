import { TextField } from "@mui/material";

import type { FieldValues } from "react-hook-form";
import type { DynamicInputProps } from "../typescript/type/component.type";

const DynamicInput = <T extends FieldValues>({
  name,
  label,
  type = "text",
  rows,
  required = false,
  register,
  errors,
}: DynamicInputProps<T>) => {
  const error = errors[name];
  const errorMessage = error?.message as string | undefined;

  return (
    <TextField
      label={
        required ? (
          <>
            {label} <span style={{ color: "red" }}>*</span>
          </>
        ) : (
          label
        )
      }
      type={type === "textarea" ? "text" : type}
      fullWidth
      multiline={type === "textarea"}
      rows={type === "textarea" ? (rows ?? 4) : undefined}
      error={!!errorMessage}
      helperText={errorMessage}
      {...register(name)}
    />
  );
};

export default DynamicInput;
