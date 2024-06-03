"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import AcceptedPostCard from "@/components/UI/AcceptedPostCard/AcceptedPostCard";
import DonorLoadingCard from "@/components/UI/LoadingCards/DonorLoadingCard";
import PostLoadingPage from "@/components/UI/LoadingPage/PostLoadingPage";
import PostCard from "@/components/UI/PostCard/PostCard";
import { useGetMyAcceptedPostQuery } from "@/redux/api/postApi";
import { Box, Grid, Typography } from "@mui/material";

const MyAcceptedPost = () => {
  const { data, isLoading } = useGetMyAcceptedPostQuery({});
  // console.log(data);

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
                <AcceptedPostCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyAcceptedPost;
