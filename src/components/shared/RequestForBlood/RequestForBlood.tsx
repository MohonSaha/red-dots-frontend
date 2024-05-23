import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker ";
import { BloodGroups, DonateOption } from "@/types";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FieldValues } from "react-hook-form";

const RequestForBlood = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRegister = async (values: FieldValues) => {};

  return (
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
      <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
        <ControlledForm
          onSubmit={handleRegister}
          //   resolver={zodResolver(ValidationSchema)}
          //   defaultValues={defaultValues}
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
            Send Blood Request
          </Button>
        </ControlledForm>
      </Box>
    </Box>
  );
};

export default RequestForBlood;
