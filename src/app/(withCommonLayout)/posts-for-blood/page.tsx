"use client";

import { useGetBloodPostsQuery } from "@/redux/api/postApi";
import {
  Box,
  Container,
  Grid,
  IconButton,
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

const BloodPost = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 800 });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetBloodPostsQuery({ ...query });
  console.log(data);
  const posts = data?.posts;
  const meta = data?.meta;

  console.log(posts);

  return (
    <Container sx={{ my: 8 }}>
      <Box>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Box>
            <Typography>Save a Life, Donate Blood</Typography>
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
              <FilterModal open={isModalOpen} setOpen={setIsModalOpen} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Grid container spacing={2} my={1}>
          {isLoading ? (
            <DonorLoadingPage />
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
    </Container>
  );
};

export default BloodPost;
