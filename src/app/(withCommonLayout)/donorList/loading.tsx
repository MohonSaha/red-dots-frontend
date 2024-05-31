import DonorLoadingCard from "@/components/UI/LoadingCards/DonorLoadingCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const DonorLoadingPage = () => {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {numbers &&
            numbers.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={4}>
                <DonorLoadingCard />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DonorLoadingPage;
