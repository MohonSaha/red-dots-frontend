"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import SearchDonor from "@/components/shared/SearchDonor/SearchDonor";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
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
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const SearchDonorSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "40px"; // Default size for larger screens (lg and up)
  }

  // const query: Record<string, any> = {};
  // const [searchTerm, setSearchTerm] = useState<{
  //   bloodType?: string;
  //   location?: string;
  //   availability?: boolean;
  // }>({});

  // if (searchTerm.bloodType) {
  //   query["bloodType"] = searchTerm.bloodType;
  // }
  // if (searchTerm.location) {
  //   query["searchTerm"] = searchTerm.location;
  // }
  // if (searchTerm.availability) {
  //   query["availability"] = searchTerm.availability;
  // }

  // const { data, isLoading } = useGetAllDonorsQuery({ ...query });
  //   console.log(data);

  // testing
  const [searchTerm, setSearchTerm] = useState<{
    bloodType?: string;
    location?: string;
    availability?: boolean;
  }>({});

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const updateSearchParams = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm.bloodType) {
      params.set("bloodType", searchTerm.bloodType);
    }

    if (searchTerm.location) {
      params.set("searchTerm", searchTerm.location);
    }

    if (searchTerm.availability !== undefined) {
      params.set("availability", searchTerm.availability.toString());
    }

    push(`/donorList?${params.toString()}`);
  }, [searchParams, push, searchTerm]);

  const { data, isLoading } = useGetAllDonorsQuery(searchParams.toString());

  // testing

  const donors = data?.donors;
  const meta = data?.meta;

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
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="h3" fontWeight={600} sx={{ fontSize }}>
              Search, Connect & Save Life
            </Typography>
          </Box>

          <SearchDonor
            search={searchTerm}
            setSearch={setSearchTerm}
            updateSearchParams={updateSearchParams}
          />

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
                    <Grid item key={item.id} xs={12} sm={12} md={6}>
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
