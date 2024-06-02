"use client";
import ControlledDatePicker from "@/components/Forms/ControlledDatePicker";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import {
  DonateOption,
  SearchBloodGroups,
  SearchDistricts,
  SearchDonorType,
} from "@/types";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";

// Define the shape of the form values
interface SearchFormValues {
  bloodType?: string;
  dateOfBloodDonation?: Date | null;
  location?: string;
  availability?: boolean;
}

// Define the props type for the component
interface SearchDonorProps {
  search: SearchFormValues;
  setSearch: (values: SearchFormValues) => void;
  updateSearchParams?: () => void;
}

const SearchDonor = ({
  search,
  setSearch,
  updateSearchParams,
}: SearchDonorProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleSearchFunctionality = async (values: FieldValues) => {
    const searchObj: Partial<SearchFormValues> = {
      bloodType: values.bloodType,
      location: values.location,
      availability: values.availability,
    };

    if (values.bloodType === SearchBloodGroups[0].value) {
      delete searchObj.bloodType;
    }

    if (values.location === SearchDistricts[0].value) {
      delete searchObj.location;
    }

    if (values.availability === undefined) {
      delete searchObj.availability;
    }

    // setSearch(searchObj);
    // console.log(searchObj, "searchobj");
    if (updateSearchParams) {
      updateSearchParams();
    }
  };

  const defaultBloodType = searchParams.get("bloodType") || undefined;
  const defaultLocation = searchParams.get("searchTerm") || undefined;
  const defaultAvailability =
    searchParams.get("availability") === "true" ? true : undefined;

  const defaultValues = {
    ...search,
    bloodType: defaultBloodType ?? SearchBloodGroups[0].value,
    location: defaultLocation ?? SearchDistricts[0].value,
    availability: defaultAvailability ?? SearchDonorType[0].value,
  };

  console.log(defaultValues, "dif");

  return (
    <Box
      sx={{
        // backgroundColor: "#fce0df",
        backgroundImage: "linear-gradient(to right, #FED7D5, #f6f6f6)",
        padding: "30px 0",
        borderRadius: "10px",
      }}
    >
      <Container>
        <Box>
          <ControlledForm
            onSubmit={handleSearchFunctionality}
            defaultValues={defaultValues}
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
                    items={SearchBloodGroups}
                    name="bloodType"
                    label="Blood Group"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                  <ControlledSelectField
                    items={SearchDistricts}
                    name="location"
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
                    items={SearchDonorType}
                    name="availability"
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
