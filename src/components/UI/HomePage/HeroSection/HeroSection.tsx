import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero-banner-2.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box>
        <Image src={heroImage} alt="Hero Image" />
      </Box>
      <Container>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            // left: "50%",
            width: "50%",
          }}
        >
          <Typography
            variant="h2"
            component="p"
            fontWeight={600}
            sx={{ color: "primary.main" }}
          >
            #
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ color: "primary.main" }}
          >
            EVERYONE COULD
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ color: "primary.main" }}
          >
            BE A HERO
          </Typography>
          <Box sx={{ width: "70%", mt: 2 }}>
            <Typography fontWeight={600}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </Typography>
          </Box>

          <Stack direction="row" gap={4} mt={2}>
            <Link href="/about-us">
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={false}
              >
                About Us
              </Button>
            </Link>
            <Link href="/donorList">
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={false}
                variant="outlined"
              >
                Search Donors
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
