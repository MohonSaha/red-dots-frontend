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
} from "@mui/material";
import DonorLoadingPage from "../donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import PostCard from "@/components/UI/PostCard/PostCard";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import FilterModal from "./components/FilterModal";
import { useDebounced } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import PostLoadingPage from "@/components/UI/LoadingPage/PostLoadingPage";

const BloodPost = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
  };

  return (
    <Container sx={{ my: 8 }}>
      <Box>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Box>
            <Typography sx={{}} variant="h4" fontWeight={600}>
              Save a Life, Donate Blood
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <TextField
                  size="small"
                  placeholder="Hospital name & address"
                  color="secondary"
                  fullWidth={true}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Box>
              <Box>
                <IconButton
                  color="secondary"
                  aria-label=""
                  sx={{ ml: 3 }}
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
