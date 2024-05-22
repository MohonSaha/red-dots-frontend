"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/svgs/logo.png";
import ControlledForm from "@/components/Forms/ControlledForm";
import Link from "next/link";
import ControlledInput from "@/components/Forms/ControlledInput";
import { FieldValues } from "react-hook-form";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { BloodGroups, DonateOption } from "@/types/common";
import { toast } from "sonner";
// import BloodtypeIcon from "@mui/icons-material/Bloodtype";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodType: "",
  donateOption: "",
  address: "",
};

const RegisterPage = () => {
  const handleRegister = async (values: FieldValues) => {
    // const data = modifyPayload(values);
    // console.log(data);

    if (values?.password !== values?.confirmPassword) {
      toast.error("Password does not mathched!");
      return;
    }
    console.log(values);

    try {
      // const res = await registerPetient(data);
      // console.log(res);
      // // register user direct login
      // if (res?.data?.id) {
      //   toast.success(res.message);
      //   const result = await userLogin({
      //     password: values.password,
      //     email: values.patient.email,
      //   });
      //   if (result?.data?.accessToken) {
      //     storeUserInfo({ accessToken: result?.data?.accessToken });
      //     router.push("/dashboard");
      //   }
      // }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image src={logo} alt="logo" width={80} height={80} />
              {/* <BloodtypeIcon /> */}
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Register Here
              </Typography>
            </Box>
          </Stack>

          <Box>
            <ControlledForm
              onSubmit={handleRegister}
              // resolver={zodResolver(ValidationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledInput
                    label="Address"
                    fullWidth={true}
                    name="address"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledSelectField
                    items={DonateOption}
                    name="donateOption"
                    label="Want to donate blood?"
                    sx={{ mt: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Group"
                    sx={{ mt: 1 }}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography
                component="p"
                fontWeight={300}
                // sx={{
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                // }}
              >
                Do you already have an account?{" "}
                <Link href="/login">Login Here</Link>
              </Typography>
            </ControlledForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
