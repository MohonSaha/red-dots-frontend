"use client";

import DonorCard from "@/components/UI/DonorCard/DonorCard";
import SearchDonor from "@/components/shared/SearchDonor/SearchDonor";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import DonorLoadingPage from "./loading";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const DonorListPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [searchTerm, setSearchTerm] = useState<{
    bloodType?: string;
    location?: string;
    availability?: boolean;
  }>({});

  // const queryParams = useSearchParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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

    params.set("page", page.toString());
    params.set("limit", limit.toString());

    replace(`${pathname}?${params.toString()}`);
  }, [searchParams, pathname, replace, searchTerm, page, limit]);

  useEffect(() => {
    updateSearchParams();
  }, [updateSearchParams]);

  const { data, isLoading } = useGetAllDonorsQuery(searchParams.toString());

  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;
  let pageCount: number = 0;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  console.log(searchTerm);

  return (
    <Box
      sx={{
        mb: 5,
        // backgroundImage:
        //   "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
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
            {}

            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.map((item) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
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
      </Container>
    </Box>
  );
};

export default DonorListPage;
