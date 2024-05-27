"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import KeyIcon from "@mui/icons-material/Key";

const ValidationSchema = z
  .object({
    oldPassword: z.string().min(6, "Must be at least 6 characters!"),
    newPassword: z.string().min(6, "Must be at least 6 characters!"),
    confirmPassword: z.string().min(6, "Must be at least 6 characters!"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Set the path to the field that should show the error
  });

const ChangePasswordPage = () => {
  //   const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [changePassword] = useChangePasswordMutation();

  const changePasswordHandler = async (values: FieldValues) => {
    if (values?.newPassword !== values?.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }

    const chnagePasswordInfo = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };

    try {
      const res = await changePassword(chnagePasswordInfo);
      if (res?.data?.statusCode === 200) {
        toast.success("Password changes successfully!");
      } else {
        toast.success("Incorrect old password!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              {/* <Image src={logo} alt="logo" width={80} height={80} /> */}
              <KeyIcon sx={{ color: "primary.main", fontSize: 70 }} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Change Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <ControlledForm
              onSubmit={changePasswordHandler}
              resolver={zodResolver(ValidationSchema)}
              defaultValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                    // onBlur={handleConfirmPasswordBlur}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "5px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Change Password
              </Button>
            </ControlledForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
