"use client";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
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
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { useCreateRequestForBloodMutation } from "@/redux/api/requestApi";
import { toast } from "sonner";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { z } from "zod";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the props type for the component
interface IProps {
  donorId: string;
}

// validation schema for send request
const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter you name!"),
  email: z.string().email("Please enter a valid email address!"),
  hospitalName: z.string().min(1, "Please enter the hospital name!"),
  hospitalAddress: z.string().min(1, "Please enter the hospital name!"),
  reason: z.string().min(1, "Please enter your the reason of blood!"),
  phoneNumber: z.string().min(1, "Please enter your phone number!"),
  // bloodType: z.string().min(1, "Please select a blood group!"),
  dateOfDonation: z
    .custom((val) => val === null || (dayjs.isDayjs(val) && val.isValid()), {
      message: "Please select a valid date",
    })
    .nullable(),
});

const RequestForBlood = ({ donorId }: IProps) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useGetSingleUserQuery({});

  const [createRequestForBlood] = useCreateRequestForBloodMutation();

  const handleRequestForBlood = async (values: FieldValues) => {
    setLoading(true);

    const requestData = {
      donorId: donorId,
      phoneNumber: values?.phoneNumber,
      dateOfDonation: dateFormatter(values?.dateOfDonation),
      hospitalName: values?.hospitalName,
      hospitalAddress: values?.hospitalAddress,
      reason: values?.reason,
    };

    try {
      const res = await createRequestForBlood(requestData).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Your request sent successfully!");
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
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
  };

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
      {!isLoading && (
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
                  label="Hospital"
                  fullWidth={true}
                  name="hospitalName"
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
                  label="Reason Of Blood"
                  fullWidth={true}
                  name="reason"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ControlledDatePicker
                  name="dateOfDonation"
                  label="Date Of Donation"
                  sx={{ mt: 0.5 }}
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <ControlledInput
                  label="Contack Number"
                  type="number"
                  name="phoneNumber"
                  fullWidth={true}
                />
              </Grid>
            </Grid>

            {/* <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
              // disabled={isButtonDisabled}
            >
              Send Blood Request
            </Button> */}

            <LoadingButton
              size="small"
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth={true}
              endIcon={<SendIcon />}
              loadingPosition="end"
              sx={{
                margin: "10px 0px",
              }}
            >
              <span>Send Blood Request</span>
            </LoadingButton>
          </ControlledForm>
        </Box>
      )}
    </Box>
  );
};

export default RequestForBlood;
