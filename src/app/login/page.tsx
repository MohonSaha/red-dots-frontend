"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import logo from "@/assets/svgs/logo.png";

// export const ValidationSchema = z.object({
//   email: z.string().email("Please enter a valid email address!"),
//   password: z.string().min(6, "Must be at least 6 charecters!"),
// });

const LoginPage = () => {
  const router = useRouter();
  // error message state that comes from server
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    try {
      // const res = await userLogin(values);
      // console.log(res);
      // if (res?.data?.accessToken) {
      //   toast.success(res?.message);
      //   storeUserInfo({ accessToken: res?.data?.accessToken });
      //   router.push("/dashboard");
      // } else {
      //   setError(res?.message);
      //   // toast.error(res?.message);
      // }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
              <Image src={logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login To Red Dots
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography color="red" fontWeight={700}>
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <ControlledForm
              onSubmit={handleLogin}
              // resolver={zodResolver(ValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <ControlledInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <ControlledInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "5px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>

              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link color="blue" href="/register">
                  Create an account
                </Link>
              </Typography>
            </ControlledForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
