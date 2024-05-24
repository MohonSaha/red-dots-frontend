import { SxProps, TextField } from "@mui/material";
import { FocusEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
};

const ControlledInput = ({
  name,
  label,
  type = "text",
  size = "small",
  disabled = false,
  fullWidth,
  sx,
  placeholder,
  required,
  onBlur,
}: TInputProps) => {
  const { handleSubmit, control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}
    />
  );
};

export default ControlledInput;
