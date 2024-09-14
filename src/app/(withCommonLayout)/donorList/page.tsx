"use client";

import DonorCard from "@/components/UI/DonorCard/DonorCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DonorLoadingPage from "./loading";
import SearchDonorV2 from "@/components/shared/SearchDonor/SearchDonorV2";
import { useRouter, useSearchParams } from "next/navigation";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const DonorListPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  // useSearchParams to get the query params from the URL
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read query parameters on page load and parse them into an object
  const [queryString, setQueryString] = useState<string>(() => {
    const params = new URLSearchParams(searchParams.toString());
    return params.toString();
  });

  // Fetch the donors using the query string from the URL
  const { data, isLoading } = useGetAllDonorsQuery(queryString);

  const donors = data?.donors;
  const meta = data?.meta;
  let pageCount: number = 0;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const selectedDonors = useSelector((state: RootState) => state.groupMail);

  console.log(selectedDonors);

  return (
    <Container>
      <Box
        sx={{
          mb: 5,
        }}
      >
        <Stack
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            position: "sticky",
            top: "10%",
            zIndex: 1000,
            backgroundColor: "white",
            marginBottom: "15px",
            paddingTop: "20px",
            paddingBottom: "15px",
          }}
        >
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <SearchDonorV2 setQueryString={setQueryString} />
          </Box>
          <Stack sx={{ maxWidth: "20%" }}>
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
          </Stack>
        </Stack>

        {/* <SearchDonor
          search={searchTerm}
          setSearch={setSearchTerm}
          updateSearchParams={updateSearchParams}
        /> */}

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {}

            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.map((item) => (
                <Grid item key={item.id} xs={12} sm={12} md={6}>
                  <DonorCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>

        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DonorListPage;
