"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker ";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { BloodGroups, DonateOption } from "@/types";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

// Define the shape of the form values
interface SearchFormValues {
  bloodType?: string;
  donateOption?: string;
  lastDonationDate?: Date | null;
}

// Define the props type for the component
interface SearchDonorProps {
  search: SearchFormValues;
  setSearch: (values: SearchFormValues) => void;
}

const SearchDonor = ({ search, setSearch }: SearchDonorProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRegister = async (values: FieldValues) => {
    // console.log(values);
    setSearch(values);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#fce0df",
        padding: "40px 0",
      }}
    >
      <Container>
        <Box>
          <ControlledForm
            onSubmit={handleRegister}
            //   defaultValues={defaultValues}
          >
            <Stack
              //   direction="row"
              direction={{ md: "row", sm: "column", xs: "column" }}
              gap={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={3}>
                  <ControlledSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Group"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <ControlledSelectField
                    items={DonateOption}
                    name="donateOption"
                    label="Want to donate blood?"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <ControlledDatePicker
                    name="lastDonationDate"
                    label="Last Donation Date"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <ControlledSelectField
                    items={DonateOption}
                    name="donateOption"
                    label="Want to donate blood?"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  mt: { xs: 0, sm: 0, md: 2 }, // Responsive margin-top
                  width: { xs: "100%", sm: "100%", md: "auto" }, // Responsive width
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
            </Stack>
          </ControlledForm>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchDonor;
