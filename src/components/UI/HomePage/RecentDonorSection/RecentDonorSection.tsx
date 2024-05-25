"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import DonorCard from "../../DonorCard/DonorCard";
import RecentDonarCard from "../../RecentDonarCard/RecentDonarCard";

const RecentDonorSection = () => {
  const { data, isLoading } = useGetAllDonorsQuery({});
  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <Container>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {}

            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
                  <RecentDonarCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default RecentDonorSection;
