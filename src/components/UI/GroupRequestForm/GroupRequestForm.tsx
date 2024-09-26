"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { z } from "zod";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { useCreateRequestForBloodMutation } from "@/redux/api/requestApi";
import { FieldValues } from "react-hook-form";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { clearAllDonors } from "@/redux/features/GroupMailSlice";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";

// Define the props type for the component
interface IProps {
  donorIds: string[]; // Array of donor IDs
}

// Validation schema for sending a request
const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  hospitalName: z.string().min(1, "Please enter the hospital name!"),
  hospitalAddress: z.string().min(1, "Please enter the hospital address!"),
  reason: z.string().min(1, "Please enter the reason for blood!"),
  phoneNumber: z.string().min(1, "Please enter your phone number!"),
  dateOfDonation: z
    .custom((val) => val === null || (dayjs.isDayjs(val) && val.isValid()), {
      message: "Please select a valid date",
    })
    .nullable(),
});

const GroupRequestForm = ({ donorIds }: IProps) => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useGetSingleUserQuery({});

  const [createRequestForBlood] = useCreateRequestForBloodMutation();

  const isGroupMailDonorExist = donorIds.length;

  // Function to handle creating requests for multiple donors
  const handleRequestForBlood = async (values: FieldValues) => {
    setLoading(true);

    // Loop over each donorId and create request data for each donor
    for (const donorId of donorIds) {
      const requestData = {
        donorId: donorId,
        phoneNumber: values?.phoneNumber,
        dateOfDonation: dateFormatter(values?.dateOfDonation),
        hospitalName: values?.hospitalName,
        hospitalAddress: values?.hospitalAddress,
        reason: values?.reason,
      };

      console.log({ requestData });

      try {
        const res = await createRequestForBlood(requestData).unwrap();
        if (res?.id) {
          toast.success(`Request sent successfully`);
        }
      } catch (error) {
        console.error(`Failed to send request to donor ID: ${donorId}`, error);
      }
    }

    dispatch(clearAllDonors());
    router.push(`/dashboard/user/my-blood-donation-request`, { shallow: true });
    setLoading(false); // Set loading to false after all requests are sent
  };

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
  };

  console.log(userInfo?.email, "swna");

  return (
    <Box>
      {!isLoading && (
        <Box sx={{ width: "100%", mx: "auto", mt: -1 }}>
          <ControlledForm
            onSubmit={handleRequestForBlood}
            resolver={zodResolver(ValidationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={2} my={1}>
              <Grid item xs={12} sm={12} md={12}>
                <ControlledInput label="Name" fullWidth={true} name="name" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
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
                  label="Reason For Blood"
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
                  disablePast={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <ControlledInput
                  label="Contact Number"
                  type="number"
                  name="phoneNumber"
                  fullWidth={true}
                />
              </Grid>
            </Grid>

            <LoadingButton
              size="small"
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth={true}
              endIcon={<SendIcon />}
              loadingPosition="end"
              disabled={
                userInfo?.email == undefined || isGroupMailDonorExist === 0
              }
              sx={{
                margin: "10px 0px",
              }}
            >
              {userInfo?.email == undefined ? (
                <span>Login To Request</span>
              ) : (
                <span>Send Blood Request</span>
              )}
            </LoadingButton>
          </ControlledForm>
        </Box>
      )}
    </Box>
  );
};

export default GroupRequestForm;
