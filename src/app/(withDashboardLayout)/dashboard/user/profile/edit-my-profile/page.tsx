"use client";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import {
  BloodGroups,
  BooleanOption,
  Districts,
  DonateOption,
  Gender,
} from "@/types";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import dayjs from "dayjs";
import {
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/authApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { useRouter } from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";

const EditMyProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: userData, isLoading } = useGetSingleUserQuery({});
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    setLoading(true);
    values.lastDonationDate = dateFormatter(values.lastDonationDate);
    values.age = Number(values.age);
    values.phoneNumber = Number(values.phoneNumber);
    values.height = Number(values.height);
    values.weight = Number(values.weight);
    values.availability = values.availability === "YES" ? true : false;
    values.hasAllergies = values.hasAllergies === "YES" ? true : false;
    values.hasDiabetes = values.hasDiabetes === "YES" ? true : false;

    // console.log(values);

    try {
      const res = await updateMyProfile({ body: values }).unwrap();

      if (res?.id) {
        toast.success("Profile updated successfully!");
        setLoading(false);
        router.push("/dashboard/user/profile");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  //   if (!isLoading) {
  //     console.log(userData);
  //   }

  const defaultValues = {
    name: userData?.name || null,
    email: userData?.email || null,
    phoneNumber: userData?.userProfile?.phoneNumber || 0,
    gender: userData?.userProfile?.gender || "MALE",
    bloodType: userData?.bloodType || null,
    availability: userData?.availability === true ? "YES" : "NO",
    age: userData?.userProfile?.age || 0,
    height: userData?.userProfile?.height || 0,
    weight: userData?.userProfile?.weight || 0,
    hasAllergies: userData?.userProfile?.hasAllergies === true ? "YES" : "NO",
    hasDiabetes: userData?.userProfile?.hasDiabetes === true ? "YES" : "NO",
    location: userData?.location || null,
    lastDonationDate: userData?.userProfile?.lastDonationDate
      ? dayjs(userData?.userProfile?.lastDonationDate)
      : null,
    bio: userData?.userProfile?.bio || null,
  };

  //   userProfile?.hasDiabetes === true ? "YES" : "NO",

  return (
    <ControlledForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="name"
            label="Name"
            fullWidth={true}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="email"
            type="email"
            label="Email"
            fullWidth={true}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="phoneNumber"
            label="Contact Number"
            fullWidth={true}
            type="number"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={Gender}
            name="gender"
            label="Gender"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={BloodGroups}
            name="bloodType"
            label="Blood Group"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={DonateOption}
            name="availability"
            label="Availability"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="age"
            label="Age"
            fullWidth={true}
            type="number"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="height"
            label="Height (cm)"
            fullWidth={true}
            type="number"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledInput
            name="weight"
            label="Weight (kg)"
            fullWidth={true}
            type="number"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={BooleanOption}
            name="hasAllergies"
            label="Allergies"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={BooleanOption}
            name="hasDiabetes"
            label="Diabetes"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ControlledSelectField
            items={Districts}
            name="location"
            label="Address"
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <ControlledDatePicker
            name="lastDonationDate"
            label="Last Donation Date"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ControlledInput
            name="bio"
            label="Bio"
            fullWidth={true}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>

      <LoadingButton
        size="small"
        type="submit"
        loading={loading}
        variant="contained"
        endIcon={<SaveIcon />}
        loadingPosition="end"
        sx={{
          margin: "10px 0px",
        }}
      >
        <span>Save</span>
      </LoadingButton>
    </ControlledForm>
  );
};

export default EditMyProfile;
