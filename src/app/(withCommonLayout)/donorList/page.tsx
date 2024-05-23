"use client";

import DonorCard from "@/components/UI/DonorCard/DonorCard";
import SearchDonor from "@/components/shared/SearchDonor/SearchDonor";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DonorLoadingPage from "./loading";

const DonorListPage = () => {
  const [searchValue, setSearchValue] = useState({});
  //   console.log(searchValue);

  const { data, isLoading } = useGetAllDonorsQuery({});
  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;

  return (
    <Box sx={{ mb: 5 }}>
      <SearchDonor search={searchValue} setSearch={setSearchValue} />

      <Container>
        <Box
          sx={{
            backgroundColor: "#eb2c29",
            padding: "10px 0",
            mt: 5,
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              padding: "5px 20px",
              color: "white",
              fontWeight: 600,
            }}
          >
            Total donors found: {meta?.total}
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {}

            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
                  <DonorCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DonorListPage;
