import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";
import MyFullScreenModal from "@/components/shared/Modal/MyFullScreenModal";
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
import { useUpdateMyProfileMutation } from "@/redux/api/authApi";
import { dateFormatter } from "@/utils/dateFormatter";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData: any;
};

const ProfileUpdateModal = ({ open, setOpen, userData }: TProps) => {
  //   const [createDoctor] = useCreateDoctorMutation();
  const [updateMyProfile] = useUpdateMyProfileMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values); // convert the data to form data
    values.lastDonationDate = dateFormatter(values.lastDonationDate);
    values.age = Number(values.age);
    values.phoneNumber = Number(values.phoneNumber);
    values.height = Number(values.height);
    values.weight = Number(values.weigh);

    console.log(values);

    try {
      const res = await updateMyProfile({ body: values }).unwrap();
      console.log(res);
      //   if (res?.id) {
      //     toast.success("Doctod updated successfully!");
      //     router.push("/dashboard/admin/doctors");
      //   }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    name: userData?.name || null,
    email: userData?.email || null,
    phoneNumber: userData?.phoneNumber || null,
    gender: userData?.userProfile?.gender || null,
    bloodType: userData?.bloodType || null,
    availability: userData?.availability || null,
    age: userData?.userProfile?.age || 0,
    height: userData?.userProfile?.height || 0,
    weight: userData?.userProfile?.weight || 0,
    hasAllergies: userData?.userProfile?.hasAllergies || null,
    hasDiabetes: userData?.userProfile?.hasDiabetes || null,
    location: userData?.location || null,
    lastDonationDate: userData?.userProfile?.lastDonationDate
      ? dayjs(userData?.userProfile?.lastDonationDate)
      : null,
    bio: userData?.userProfile?.bio || null,
  };

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

      <Button type="submit">Create</Button>
    </ControlledForm>
  );
};

export default ProfileUpdateModal;
