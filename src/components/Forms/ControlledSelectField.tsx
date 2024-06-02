// "use client";
// import { MenuItem, SxProps, TextField } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// interface ITextField {
//   name: string;
//   size?: "small" | "medium";
//   placeholder?: string;
//   label?: string;
//   required?: boolean;
//   fullWidth?: boolean;
//   sx?: SxProps;
//   items: string[];
// }

// const ControlledSelectField = ({
//   items,
//   name,
//   label,
//   size = "small",
//   required,
//   fullWidth = true,
//   sx,
// }: ITextField) => {
//   const { control, formState } = useFormContext();
//   const isError = formState.errors[name] !== undefined;

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <TextField
//           {...field}
//           sx={{
//             ...sx,
//           }}
//           size={size}
//           select
//           label={label}
//           required={required}
//           fullWidth={fullWidth}
//           error={isError}
//           helperText={
//             isError ? (formState.errors[name]?.message as string) : ""
//           }
//         >
//           {items.map((name) => (
//             <MenuItem key={name} value={name}>
//               {name}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//     />
//   );
// };

// export default ControlledSelectField;

// "use client";
// import { MenuItem, SxProps, TextField } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// interface ITextField {
//   name: string;
//   size?: "small" | "medium";
//   placeholder?: string;
//   label?: string;
//   required?: boolean;
//   fullWidth?: boolean;
//   sx?: SxProps;
//   items: { label: string; value: string | undefined }[]; // Update to accept objects with label and value
// }

// const ControlledSelectField = ({
//   items,
//   name,
//   label,
//   size = "small",
//   required,
//   fullWidth = true,
//   sx,
// }: ITextField) => {
//   const { control, formState } = useFormContext();
//   const isError = formState.errors[name] !== undefined;

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <TextField
//           {...field}
//           sx={{
//             ...sx,
//           }}
//           size={size}
//           select
//           label={label}
//           required={required}
//           fullWidth={fullWidth}
//           error={isError}
//           helperText={
//             isError ? (formState.errors[name]?.message as string) : ""
//           }
//         >
//           {items.map((item) => (
//             <MenuItem key={item.value} value={item.value}>
//               {item.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//     />
//   );
// };

// export default ControlledSelectField;

// "use client";
// import { MenuItem, SxProps, TextField } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// interface ITextField {
//   name: string;
//   size?: "small" | "medium";
//   placeholder?: string;
//   label?: string;
//   required?: boolean;
//   fullWidth?: boolean;
//   sx?: SxProps;
//   items: { label: string; value: any }[];
// }

// const ControlledSelectField = ({
//   items,
//   name,
//   label,
//   size = "small",
//   required,
//   fullWidth = true,
//   sx,
// }: ITextField) => {
//   const { control, formState } = useFormContext();
//   const isError = formState.errors[name] !== undefined;

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <TextField
//           {...field}
//           sx={{
//             ...sx,
//           }}
//           size={size}
//           select
//           label={label}
//           required={required}
//           fullWidth={fullWidth}
//           error={isError}
//           helperText={
//             isError ? (formState.errors[name]?.message as string) : ""
//           }
//         >
//           {items.map((item) => (
//             <MenuItem key={item.label} value={item.value}>
//               {item.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//     />
//   );
// };

// export default ControlledSelectField;

import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: (string | { label: string; value: any })[]; // Union type for items
}

const ControlledSelectField = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((item) => {
            if (typeof item === "string") {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              );
            }
          })}
        </TextField>
      )}
    />
  );
};

export default ControlledSelectField;
