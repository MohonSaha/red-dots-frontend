import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Box sx={{ mx: "auto", width: "100%" }}>
          <Stack
            //   direction={{ md: "row", sm: "column" }}
            //   justifyContent="space-between"
            gap={5}
            direction="row"
            // spacing={{ md: 10, sm: 5, xs: 5 }}
            // container
          >
            <Box sx={{ width: "100%" }}>
              <Box>
                <Typography
                  component="h5"
                  variant="h4"
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
              <Box sx={{ mx: "auto", width: "100%" }}>
                <Typography
                  component="h5"
                  variant="h4"
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
        </Box>

        <Box sx={{ mx: "auto", textAlign: "center" }}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
