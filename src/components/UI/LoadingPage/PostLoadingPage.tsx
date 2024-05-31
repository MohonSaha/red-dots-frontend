import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PostLoadingCard from "../LoadingCards/PostLoadingCard";

const PostLoadingPage = () => {
  const numbers = ["1", "2", "3", "4"];
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {numbers &&
            numbers.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={6}>
                <PostLoadingCard />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostLoadingPage;
