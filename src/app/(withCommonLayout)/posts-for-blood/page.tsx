"use client";

import { useGetBloodPostsQuery } from "@/redux/api/postApi";
import { Box, Container, Grid } from "@mui/material";
import DonorLoadingPage from "../donorList/loading";
import DonorCard from "@/components/UI/DonorCard/DonorCard";
import PostCard from "@/components/UI/PostCard/PostCard";

const BloodPost = () => {
  const { data, isLoading } = useGetBloodPostsQuery({});
  console.log(data);

  return (
    <Container>
      <Box>Blood Post</Box>

      <Box>
        <Grid container spacing={2} my={1}>
          {isLoading ? (
            <DonorLoadingPage />
          ) : (
            data &&
            data.map((item: any) => (
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
