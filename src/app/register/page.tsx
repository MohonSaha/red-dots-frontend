"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/svgs/logo.png";
import ControlledForm from "@/components/Forms/ControlledForm";
import Link from "next/link";
import ControlledInput from "@/components/Forms/ControlledInput";
import { FieldValues } from "react-hook-form";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { BloodGroups, DonateOption } from "@/types/common";
import { toast } from "sonner";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerUser } from "@/services/actions/registerUser";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker ";
import { dateFormatter } from "@/utils/dateFormatter";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import BloodtypeIcon from "@mui/icons-material/Bloodtype";

// validation schema for patient registration
export const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter you name!"),
  email: z.string().email("Please enter a valid email address!"),
  address: z.string().min(1, "Please enter your addresss!"),
  password: z.string().min(6, "Must be at least 6 charecters!"),
  confirmPassword: z.string().min(6, "Must be at least 6 charecters!"),
  bloodType: z.string().min(1, "Please select a blood group!"),
  donateOption: z.string().min(1, "Please select a option!"),
  age: z.number().min(1, "Please enter your age!"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodType: "",
  donateOption: "",
  address: "",
  age: 0,
};

const RegisterPage = () => {
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    if (values?.password !== values?.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }

    const registerUserData = {
      name: values?.name,
      email: values?.email,
      password: values?.password,
      bloodType: values?.bloodType,
      location: values?.address,
      lastDonationDate: dateFormatter(values?.lastDonationDate),
      age: Number(values?.age),
      bio: "Create your bio here ...",
    };

    // console.log({ registerUserData });

    try {
      const res = await registerUser(registerUserData);
      console.log(res);

      // register user direct login functionality
      if (res?.data?.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleConfirmPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    const password = (
      document.querySelector("input[name='password']") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      setIsButtonDisabled(true);
    } else {
      setPasswordMatchError(false);
      setIsButtonDisabled(false);
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
                Register To Red Dots
              </Typography>
            </Box>
          </Stack>

          <Box>
            <ControlledForm
              onSubmit={handleRegister}
              resolver={zodResolver(ValidationSchema)}
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
                    onBlur={handleConfirmPasswordBlur}
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
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Group"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledDatePicker
                    name="lastDonationDate"
                    label="Last Donation Date"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Age"
                    fullWidth={true}
                    name="age"
                    sx={{ mt: 0.5 }}
                    type="number"
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                // disabled={isButtonDisabled}
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">Login Here</Link>
              </Typography>

              {passwordMatchError && (
                <Typography color="error" variant="body2">
                  Passwords do not match.
                </Typography>
              )}
            </ControlledForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
