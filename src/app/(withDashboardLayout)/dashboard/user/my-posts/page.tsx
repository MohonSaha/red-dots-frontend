"use client";
import AcceptedPostCard from "@/components/UI/AcceptedPostCard/AcceptedPostCard";
import PostLoadingPage from "@/components/UI/LoadingPage/PostLoadingPage";
import MyPostCard from "@/components/UI/MyPostCard/MyPostCard";
import { useGetMyPostsQuery } from "@/redux/api/postApi";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const MyPostsPage = () => {
  const { data, isLoading } = useGetMyPostsQuery({});

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          My accepted posts for donation
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={2} my={1}>
          {isLoading ? (
            <PostLoadingPage />
          ) : (
            data &&
            data.map((item: any) => (
              <Grid item key={item.id} xs={12} sm={12} md={6}>
                <MyPostCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyPostsPage;
