"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  disablePast?: boolean;
  disableFuture?: boolean;
}

const ControlledDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
  disablePast,
  disableFuture,
}: IDatePicker) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value, ...field } }) => {
        const dateValue = value ? dayjs(value) : null;
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              disableFuture={disableFuture}
              disablePast={disablePast}
              onChange={(date) => onChange(date ? dayjs(date) : null)}
              {...field}
              value={dateValue}
              slotProps={{
                textField: {
                  required: required,
                  fullWidth: fullWidth,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default ControlledDatePicker;
