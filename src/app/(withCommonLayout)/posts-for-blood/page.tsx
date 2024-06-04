"use client";

import { useGetBloodPostsQuery } from "@/redux/api/postApi";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Pagination,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DonorLoadingPage from "../donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import PostCard from "@/components/UI/PostCard/PostCard";
import TuneIcon from "@mui/icons-material/Tune";
import { useEffect, useState } from "react";
import FilterModal from "./components/FilterModal";
import { useDebounced } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import PostLoadingPage from "@/components/UI/LoadingPage/PostLoadingPage";

const BloodPost = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filter, setFilter] = useState<{
    hospitalLocation?: string;
    dateOfDonation?: string;
    bloodType?: string;
    numberOfBags?: number;
  }>({});
  const query: Record<string, any> = {};

  // search functionality
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 800 });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  // filter functionality
  if (filter.hospitalLocation) {
    query["hospitalLocation"] = filter.hospitalLocation;
  }
  if (filter.dateOfDonation) {
    query["dateOfDonation"] = filter.dateOfDonation;
  }
  if (filter.bloodType) {
    query["bloodType"] = filter.bloodType;
  }

  // add pagination query:
  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetBloodPostsQuery({ ...query });
  const posts = data?.posts;
  const meta = data?.meta;

  let pageCount: number = 0;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "35px"; // Default size for larger screens (lg and up)
  }

  return (
    <Container sx={{ my: 8 }}>
      <Box>
        <Stack
          direction={{ md: "row", sm: "column", xs: "column" }}
          justifyContent="space-between"
          mb={2}
          gap={3}
        >
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize }} variant="h4" fontWeight={600}>
              Save a Life, Donate Blood
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack direction="row" justifyContent="space-between">
              <Box sx={{ width: "100%", textAlign: "end" }}>
                <TextField
                  size="small"
                  placeholder="Hospital name & address"
                  color="secondary"
                  // fullWidth={true}
                  sx={{ width: "70%" }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Box>
              <Box>
                <IconButton
                  color="secondary"
                  aria-label=""
                  sx={{ ml: 3, color: "#eb2c29" }}
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <TuneIcon />
                </IconButton>
              </Box>
              <FilterModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                filter={filter}
                setFilter={setFilter}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Grid container spacing={2} my={1}>
          {isLoading ? (
            // <DonorLoadingPage />
            <PostLoadingPage />
          ) : (
            posts &&
            posts.map((item) => (
              <Grid item key={item.id} xs={12} sm={12} md={6}>
                <PostCard item={item} />
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
  );
};

export default BloodPost;
