"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker ";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import { BloodGroups, Districts, DonateOption, DonorType } from "@/types";
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
  dateOfBloodDonation?: Date | null;
}

// Define the props type for the component
interface SearchDonorProps {
  search: SearchFormValues;
  setSearch: (values: SearchFormValues) => void;
}

const SearchDonor = ({ search, setSearch }: SearchDonorProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSearchFunctionality = async (values: FieldValues) => {
    // console.log(values);

    const searchObj = {
      bloodType: values?.bloodType,
      location: values?.district,
    };

    setSearch(searchObj);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fce0df",
        padding: "40px 0",
        borderRadius: "10px",
      }}
    >
      <Container>
        <Box>
          <ControlledForm
            onSubmit={handleSearchFunctionality}
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
                    items={Districts}
                    name="district"
                    label="District"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <ControlledDatePicker
                    name="dateOfBloodDonation"
                    label="Date of Blood Donation"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <ControlledSelectField
                    items={DonorType}
                    name="donorType"
                    label="Donor Type"
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
                Search
              </Button>
            </Stack>
          </ControlledForm>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchDonor;
