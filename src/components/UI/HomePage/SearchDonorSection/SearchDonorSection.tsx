"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import SearchDonor from "@/components/shared/SearchDonor/SearchDonor";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const SearchDonorSection = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<{
    bloodType?: string;
    location?: string;
    availability?: boolean;
  }>({});

  if (searchTerm.bloodType) {
    query["bloodType"] = searchTerm.bloodType;
  }
  if (searchTerm.location) {
    query["searchTerm"] = searchTerm.location;
  }
  if (searchTerm.availability) {
    query["availability"] = searchTerm.availability;
  }

  const { data, isLoading } = useGetAllDonorsQuery({ ...query });
  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;

  return (
    <Box
      sx={{
        py: 8,
        backgroundImage:
          "conic-gradient(from 135deg, #f6f6f6, #FED7D5 90deg, #f6f6f6 180deg, #f6f6f6)",
      }}
    >
      <Container>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SearchDonor search={searchTerm} setSearch={setSearchTerm} />

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
                {isLoading ? (
                  <DonorLoadingPage />
                ) : (
                  donors &&
                  donors.slice(0, 6).map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={12} md={4}>
                      <DonorCard item={item} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
          </Container>

          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Link href="/donorList">
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={false}
                variant="outlined"
              >
                See More
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchDonorSection;
