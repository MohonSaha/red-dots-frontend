"use client";
import { SxProps, Box, Typography, Button, TextField } from "@mui/material";
import { FocusEvent, ChangeEvent, useRef, useState } from "react";
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
  const { control } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name); // Save the file name
    }
  };

  const handleClick = () => {
    // Trigger file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          {type === "file" ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed #ccc",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
                cursor: "pointer",
                ...sx,
              }}
              onClick={handleClick} // Trigger click event
            >
              <input
                {...field}
                ref={fileInputRef} // Reference to the hidden file input
                type="file"
                onChange={(e) => {
                  handleFileChange(e);
                  field.onChange(e);
                }}
                onBlur={onBlur}
                disabled={disabled}
                style={{
                  display: "none", // Hide the file input
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: fileName ? "#000" : "#aaa",
                }}
              >
                {fileName ? `Selected: ${fileName}` : "Upload profile image"}
              </Typography>
            </Box>
          ) : (
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
        </>
      )}
    />
  );
};

export default ControlledInput;
