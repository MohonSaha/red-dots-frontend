import Link from "next/link";
import "./DailyDonor.css";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { Box, Container } from "@mui/material";
import { useGetBloodPostsQuery } from "@/redux/api/postApi";
import PostLoadingPage from "../LoadingPage/PostLoadingPage";
import DailyDonorCard from "@/components/shared/DailyDonorCard/DailyDonorCard";
import Slider from "react-slick"; // Import the Slider from react-slick
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

const DailyDeals = () => {
  const { data, isLoading } = useGetBloodPostsQuery({});
  const posts = data?.posts;

  // Slider settings (fixed autoplay issue)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 2500, // Set autoplay interval to 2000ms (2 seconds)
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
      }}
    >
      <Container>
        <div className="DailyDeals">
          <div className="container-fluid">
            <div className="flex justify-between items-center text-slate-600">
              {/* <h2 className="sectionHeading mt-0 mb-0 ">Blood Needed Now</h2> */}
              <SectionHeader sectionHeader={"Blood Needed Now"} />
              <Link href="/" className="mr-2">
                <span className="font-semibold">All Posts</span>
                <KeyboardDoubleArrowRightOutlinedIcon className="" />
              </Link>
            </div>

            {/* Slider integration */}
            {isLoading ? (
              <PostLoadingPage />
            ) : (
              posts && (
                <Slider {...settings}>
                  {posts.map((item) => (
                    <div key={item.id} className="item pr-0">
                      <DailyDonorCard item={item} />
                    </div>
                  ))}
                </Slider>
              )
            )}
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default DailyDeals;
