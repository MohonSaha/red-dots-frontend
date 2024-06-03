"use client";
import React from "react";
import { Container, Grid, Typography, Link, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("div")(({ theme }) => ({
  //   backgroundColor: "red",
  backgroundImage: "url(/f.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "black",
  padding: theme.spacing(8, 2),
  position: "relative", // Adjust the opacity as needed
  zIndex: -1,
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 3,
              }}
            >
              Red Dots
            </Typography>
            <Typography color="white">
              Red Dots is an automated blood service that connects blood
              searchers with voluntary blood donors in a moment through SMS and
              website.
            </Typography>
            <Box mt={2}>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "white", mb: 3 }}
            >
              Important Links
            </Typography>
            <Stack
              gap={1}
              sx={{
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Add Blood Request
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Search Blood Donors in Bangladesh
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Frequently Asked Questions (FAQs)
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "white", mb: 3 }}
            >
              About Blood
            </Typography>
            <Stack
              gap={1}
              sx={{
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                What is blood?
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                What is blood donation?
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Who can donate blood?
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                How often can I donate blood?
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Different Blood Terms
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Different Blood Groups
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Link href="#" sx={{ color: "white", mx: 1 }}>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" sx={{ color: "white", mx: 1 }}>
            <i className="fab fa-youtube"></i>
          </Link>
          <Link href="#" sx={{ color: "white", mx: 1 }}>
            <i className="fab fa-twitter"></i>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color="white"
            component="p"
            sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)", fontWeight: 600 }}
          >
            &copy; 2024 Red Dots. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
