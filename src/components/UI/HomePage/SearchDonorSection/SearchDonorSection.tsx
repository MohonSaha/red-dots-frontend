"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import SearchDonorV2 from "@/components/shared/SearchDonor/SearchDonorV2";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { RootState } from "@/redux/store";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const SearchDonorSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Import the component dynamically without SSR
  const selectedDonors = useSelector((state: RootState) => state.groupMail);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component has mounted before rendering
  }, []);

  // useSearchParams to get the query params from the URL
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read query parameters on page load and parse them into an object
  const [queryString, setQueryString] = useState<string>(() => {
    const params = new URLSearchParams(searchParams.toString());
    return params.toString();
  });

  const { data, isLoading } = useGetAllDonorsQuery(queryString);
  // const selectedDonors = useSelector((state: RootState) => state.groupMail);

  // testing

  const donors = data?.donors;
  const meta = data?.meta;

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "40px"; // Default size for larger screens (lg and up)
  }

  return (
    <Box
      sx={{
        py: 8,
        backgroundImage:
          "linear-gradient(to top right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
      }}
      mt={isSmallScreen ? -12 : 0}
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
          <div className="flex justify-between items-center text-slate-600">
            <SectionHeader sectionHeader={"Find your donors"} />
            <Link href="/donorList" className="-mr-2">
              <span className="font-semibold">See All Donors</span>
              <KeyboardDoubleArrowRightOutlinedIcon className="" />
            </Link>
          </div>

          <Stack
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
              <SearchDonorV2 setQueryString={setQueryString} />
            </Box>
            <Stack sx={{ maxWidth: "20%" }}>
              <Link href={`/groupMail`}>
                {isMounted && (
                  <Badge
                    color="secondary"
                    sx={{ color: "#2e7df8" }}
                    badgeContent={
                      selectedDonors.length === 0 ? "0" : selectedDonors.length
                    }
                  >
                    <ForwardToInboxIcon
                      sx={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Badge>
                )}
              </Link>
            </Stack>
          </Stack>

          <Box>
            {/* <Box
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
            </Box> */}

            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                {isLoading ? (
                  <DonorLoadingPage />
                ) : (
                  donors &&
                  donors.slice(0, 6).map((item, index) => (
                    <Grid item key={item.id} xs={12} sm={12} md={6}>
                      <DonorCard item={item} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
          </Box>

          {/* <Box sx={{ mt: 5, textAlign: "center" }}>
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
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default SearchDonorSection;
