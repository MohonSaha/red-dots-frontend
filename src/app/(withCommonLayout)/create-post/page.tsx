"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { useCreatePostForBloodMutation } from "@/redux/api/postApi";
import { Districts } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const CreatePostPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useGetSingleUserQuery({});
  const [createPostForBlood] = useCreatePostForBloodMutation();

  const handleRequestForBlood = async (values: FieldValues) => {
    // console.log(values);

    const postData = {
      phoneNumber: values?.phoneNumber,
      dateOfDonation: dateFormatter(values?.dateOfDonation),
      hospitalName: values?.hospitalName,
      hospitalLocation: values?.hospitalLocation,
      hospitalAddress: values?.hospitalAddress,
      numberOfBags: Number(values?.numberOfBags),
      reason: values?.reason,
    };

    console.log(postData);

    try {
      const res = await createPostForBlood(postData).unwrap();
      console.log(res);
      //   if (res?.id) {
      //     toast.success("Your request sent successfully!");
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
    hospitalLocation: "",
    numberOfBags: 0,
  };

  return (
    <Container>
      <Box sx={{ my: 12 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h4"
            fontWeight={600}
            sx={{ mb: 1 }}
          >
            Contact With Blood Donor
          </Typography>
          <Box
            sx={{
              backgroundColor: "#878787",
              borderRadius: "8px",
              height: "6px",
              width: "70%",
              mx: "auto",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "#878787",
              borderRadius: "8px",
              height: "6px",
              width: "60%",
              mx: "auto",
              mt: 2,
            }}
          ></Box>
        </Box>
        {!isLoading && (
          <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
            <ControlledForm
              onSubmit={handleRequestForBlood}
              //   resolver={zodResolver(ValidationSchema)}
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
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledSelectField
                    label="Hospital Location"
                    name="hospitalLocation"
                    items={Districts}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Hospital Address"
                    fullWidth={true}
                    name="hospitalAddress"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Contack Number"
                    type="number"
                    name="phoneNumber"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Reason Of Blood"
                    fullWidth={true}
                    name="reason"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledInput
                    label="Bags Of Blood"
                    type="numberOfBags"
                    name="numberOfBags"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <ControlledDatePicker
                    name="dateOfDonation"
                    label="Date Of Donation"
                    sx={{ mt: 0.5 }}
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
                Send Blood Request
              </Button>
            </ControlledForm>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CreatePostPage;
