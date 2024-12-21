"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import DonorCard from "../../DonorCard/DonorCard";
import RecentDonarCard from "../../RecentDonarCard/RecentDonarCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Link from "next/link";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const RecentDonorSection = () => {
  const { data, isLoading } = useGetAllDonorsQuery("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "40px"; // Default size for larger screens (lg and up)
  }

  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
        // display: "flex",
        py: 3,
        // flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <Container>
        <div className="flex justify-between items-center text-slate-600">
          <SectionHeader sectionHeader={"Meet Our Hero Donors"} />
          <Link href="/donorList" className="mr-0">
            <span className="font-semibold">All Hero Donors</span>
            <KeyboardDoubleArrowRightOutlinedIcon className="" />
          </Link>
        </div>

        <Box sx={{ mt: 0 }}>
          <Grid container spacing={4}>
            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.slice(0, 6).map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={6}>
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
