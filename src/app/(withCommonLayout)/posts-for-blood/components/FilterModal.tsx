import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import MyModal from "@/components/shared/Modal/MyModal";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import {
  ActiveStatusOption,
  BloodGroups,
  Districts,
  DonateOption,
  TotalBloodBags,
  UserRoleOption,
} from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterModal = ({ open, setOpen }: TProps) => {
  const [updateUser] = useUpdateUserMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const updateUserInfo = {
      role: values?.role,
      activeStatus: values?.status,
    };

    try {
      //   const res = await updateUser({
      //     id: userId,
      //     body: updateUserInfo,
      //   }).unwrap();
      //   if (res?.id) {
      //     toast.success("User data updated successfully!");
      //     setOpen(false);
      //   }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <MyModal open={open} setOpen={setOpen} title="Filter Donation Post">
        <ControlledForm
          onSubmit={handleFormSubmit}
          //   resolver={zodResolver(ValidationSchema)}
          //   defaultValues={defaultValues}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledSelectField
                label="Address"
                name="address"
                items={Districts}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledSelectField
                items={BloodGroups}
                name="bloodType"
                label="Blood Group"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledDatePicker
                name="lastDonationDate"
                label="Last Donation Date"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledSelectField
                items={TotalBloodBags}
                name="numberOfBags"
                label="Total Bags"
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
          >
            Filter Post
          </Button>
        </ControlledForm>
      </MyModal>
    </div>
  );
};

export default FilterModal;
