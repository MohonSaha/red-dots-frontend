import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const aboutRedDots = [
  {
    icon: "1",
    aboutTitle: "Why is Red Dots?",
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "40px"; // Default size for larger screens (lg and up)
  }

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        py: 3,
        backgroundImage:
          "linear-gradient(to top right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
      }}
    >
      <Container>
        <div className="flex justify-between items-center text-slate-600">
          <SectionHeader sectionHeader={"Blood Needed Now"} />
          <Link href="/about-us" className="mr-0">
            <span className="font-semibold">About Us</span>
            <KeyboardDoubleArrowRightOutlinedIcon className="" />
          </Link>
        </div>
        <Stack sx={{ mx: "auto", width: "100%" }} direction="column" gap={3}>
          <Stack direction={{ md: "row", sm: "column" }} gap={5}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderRadius: "0px 0px 30px 0px",
                  border: "2px solid black",
                  padding: "10px",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Why is Red Dots?
                </Typography>
                <Typography>
                  Though Bangladesh has more than 160 million people, the number
                  of safe blood bank is very few. Without divisional towns,
                  there is hardly any blood bank. But a huge amount of blood is
                  needed for treatment purposes. A good number of accidents take
                  place every day where blood needs essentially. As a result,
                  people fall in real trouble to manage blood.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  mx: "auto",
                  width: "100%",
                  borderRadius: "0px 0px 0px 30px",
                  border: "2px solid black",
                  padding: "10px",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Objectives
                </Typography>
                <Typography>
                  Encouraging voluntary blood donation Creating awareness about
                  safe blood transfer Enabling people to place blood request via
                  SMS, website, or facebook Connecting voluntary blood donors
                  via SMS or email. SMS, website, or facebook Connecting
                  voluntary blood donors via SMS or email
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Stack direction={{ md: "row", sm: "column" }} gap={5}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderRadius: "0px 100% 0px 0px",
                  border: "2px solid black",
                  padding: "10px 30% 10px 10px",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Service
                </Typography>
                <Typography>
                  Encouraging voluntary blood donation Creating awareness about
                  safe blood transfer Enabling people to place blood request via
                  SMS, website, or facebook Connecting voluntary blood donors
                  via SMS or email. SMS, website, or facebook Connecting
                  voluntary blood donors via SMS or email
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  mx: "auto",
                  width: "100%",
                  borderRadius: "100% 0px 0px 0px",
                  border: "2px solid black",
                  padding: "10px 10px 10px 30%",
                  textAlign: "right",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  humanity
                </Typography>
                <Typography>
                  Encouraging voluntary blood donation Creating awareness about
                  safe blood transfer Enabling people to place blood request via
                  SMS, website, or facebook Connecting voluntary blood donors
                  via SMS or email. SMS, website, or facebook Connecting
                  voluntary blood donors via SMS or email
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;
