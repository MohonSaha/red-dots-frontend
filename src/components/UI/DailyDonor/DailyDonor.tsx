import Link from "next/link";
import "./DailyDonor.css";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ProductDaily from "@/components/shared/DailyDonorCard/DailyDonorCard";
import { Box, Container, Grid } from "@mui/material";
import { useGetBloodPostsQuery } from "@/redux/api/postApi";
import PostLoadingPage from "../LoadingPage/PostLoadingPage";
import DailyDonorCard from "@/components/shared/DailyDonorCard/DailyDonorCard";

const DailyDeals = () => {
  const { data, isLoading } = useGetBloodPostsQuery({});
  const posts = data?.posts;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // py: 10,
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
      }}
    >
      <Container>
        <div className="DailyDeals">
          <div className="container-fluid">
            <div className="flex justify-between items-center text-slate-600">
              <h2 className="sectionHeading mt-0 mb-0 ">Blood Needed Now</h2>
              <Link href="/" className="mr-2">
                <span className="font-semibold">All Posts</span>
                <KeyboardDoubleArrowRightOutlinedIcon className="" />
              </Link>
            </div>

            <Grid container spacing={2} my={1}>
              {/* <ProductDaily />
              <ProductDaily />
              <ProductDaily /> */}

              {isLoading ? (
                // <DonorLoadingPage />
                <PostLoadingPage />
              ) : (
                posts &&
                posts.map((item) => (
                  <Grid item key={item.id} xs={12} sm={12} md={4}>
                    <DailyDonorCard item={item} />
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default DailyDeals;
