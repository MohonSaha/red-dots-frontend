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
import { dateFormatter } from "@/utils/dateFormatter";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filter: Record<string, any>;
  setFilter: any;
};

const FilterModal = ({ open, setOpen, setFilter }: TProps) => {
  const handleFilter = (values: FieldValues) => {
    values.dateOfDonation = dateFormatter(values.dateOfDonation);

    const date =
      values.dateOfDonation === "1970-01-01" ? "" : values.dateOfDonation;

    values.dateOfDonation = date;
    setFilter(values);
    setOpen(false);
  };

  const handleClearFilter = () => {
    setFilter({});
    setOpen(false);
  };

  const defaultValues = {
    bloodType: "",
    hospitalLocation: "",
    numberOfBags: 0,
    dateOfDonation: null,
  };

  return (
    <div>
      <MyModal open={open} setOpen={setOpen} title="Filter Donation Post">
        <ControlledForm
          onSubmit={handleFilter}
          //   resolver={zodResolver(ValidationSchema)}
          defaultValues={defaultValues}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledSelectField
                label="Hospital Location"
                name="hospitalLocation"
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
                name="dateOfDonation"
                label="Donation Date"
                sx={{ mt: 0.5 }}
              />
            </Grid>
          </Grid>

          <Stack direction="row" gap={6}>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Filter Post
            </Button>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              onClick={handleClearFilter}
              variant="outlined"
            >
              Clear Filter
            </Button>
          </Stack>
        </ControlledForm>
      </MyModal>
    </div>
  );
};

export default FilterModal;
