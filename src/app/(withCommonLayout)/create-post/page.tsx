"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { useCreatePostForBloodMutation } from "@/redux/api/postApi";
import { BloodGroups, Districts } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

// validation schema for create post
const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter you name!"),
  email: z.string().email("Please enter a valid email address!"),
  hospitalName: z.string().min(1, "Please enter the hospital name!"),
  hospitalLocation: z.string().min(1, "Please enter the hospital location!"),
  hospitalAddress: z.string().min(1, "Please enter the hospital name!"),
  reason: z.string().min(1, "Please enter your the reason of blood!"),
  phoneNumber: z.string().min(1, "Please enter your phone number!"),
  numberOfBags: z.string().min(1, "Please enter your phone number!"),
  bloodType: z.string().min(1, "Please select a blood group!"),
  dateOfDonation: z
    .custom((val) => val === null || (dayjs.isDayjs(val) && val.isValid()), {
      message: "Please select a valid date",
    })
    .nullable(),
});

const CreatePostPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, isLoading } = useGetSingleUserQuery({});
  const [createPostForBlood] = useCreatePostForBloodMutation();

  const handleRequestForBlood = async (values: FieldValues) => {
    setLoading(true);

    const postData = {
      phoneNumber: values?.phoneNumber,
      dateOfDonation: dateFormatter(values?.dateOfDonation),
      hospitalName: values?.hospitalName,
      hospitalLocation: values?.hospitalLocation,
      hospitalAddress: values?.hospitalAddress,
      numberOfBags: Number(values?.numberOfBags),
      reason: values?.reason,
      bloodType: values?.bloodType,
    };

    // console.log(postData);

    try {
      const res = await createPostForBlood(postData).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Blood post created successfully!");
        router.push("/posts-for-blood");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    hospitalName: "",
    bloodType: "",
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
    hospitalLocation: "",
    numberOfBags: 0,
  };

  return (
    <Container>
      <Box sx={{ my: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h4"
            fontWeight={600}
            sx={{ mb: 1 }}
          >
            Create a post for blood
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
        {!isLoading ? (
          <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
            <ControlledForm
              onSubmit={handleRequestForBlood}
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
                  <ControlledSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Group"
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
                <Grid item xs={12} sm={12} md={6}>
                  <ControlledDatePicker
                    name="dateOfDonation"
                    label="Date Of Donation"
                    required={true}
                    disablePast={true}
                  />
                </Grid>
              </Grid>

              <LoadingButton
                size="small"
                type="submit"
                loading={loading}
                variant="contained"
                fullWidth={true}
                // endIcon={<SendIcon />}
                // loadingPosition="end"
                sx={{
                  margin: "10px 0px",
                }}
              >
                <span>Create Post</span>
              </LoadingButton>
            </ControlledForm>
          </Box>
        ) : (
          <Container>
            <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
              {Array.from(new Array(7)).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  height={52}
                  sx={{ mb: 2 }}
                />
              ))}
            </Box>
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default CreatePostPage;
