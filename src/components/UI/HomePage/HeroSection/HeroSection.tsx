import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import heroImage from "@/assets/images/hero-banner-2.png";
import mobileImage from "@/assets/images/mobile-image.png";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

const parent = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: isSmallScreen ? "none" : "block" }}>
          <Image
            src={heroImage}
            alt="Hero Image"
            layout="responsive"
            objectFit="cover"
            priority
            style={{
              width: "100%",
              minHeight: "90vh",
            }}
          />
        </Box>
        <Box sx={{ display: isSmallScreen ? "block" : "none" }}>
          <Image
            src={mobileImage}
            alt="Mobile Hero Image"
            layout="responsive"
            objectFit="cover"
            priority
            style={{
              width: "100%",
              minHeight: "90vh",
            }}
          />
        </Box>
      </Box>
      <Container>
        <Box
          sx={{
            position: "absolute",
            top: isSmallScreen ? "10%" : "10%",
            width: isSmallScreen ? "90%" : "50%",
            textAlign: isSmallScreen ? "left" : "left",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Typography
              variant={isSmallScreen ? "h3" : "h2"}
              component="p"
              fontWeight={600}
              sx={{ color: "primary.main" }}
            >
              #
            </Typography>
          </motion.div>
          <Typography
            variant={isSmallScreen ? "h4" : "h2"}
            fontWeight={600}
            sx={{ color: "primary.main" }}
          >
            EVERYONE COULD
          </Typography>
          <Typography
            variant={isSmallScreen ? "h4" : "h2"}
            fontWeight={600}
            sx={{ color: "primary.main" }}
          >
            BE A HERO
          </Typography>
          <motion.div
            variants={parent}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
          >
            <Box sx={{ width: isSmallScreen ? "90%" : "70%", mt: 2 }}>
              <Typography
                fontWeight={600}
                style={{ textShadow: "0 0 5px rgba(255, 255, 255, 1)" }}
              >
                Because of You, Life Doesn&#39;t Stop. Every two minutes,
                someone in the Bangaldesh needs blood. This could be a little
                girl in the ICU or a mother with Stage 3 leukemia. If you&#39;re
                worried about needles, don&#39;t be—most blood donors compare
                the experience to a mild, split-second pinch!
              </Typography>
            </Box>
          </motion.div>

          <Stack
            direction={isSmallScreen ? "column" : "row"}
            gap={{ md: 4, sm: 1 }}
            mt={2}
            alignItems={isSmallScreen ? "center" : "flex-start"}
          >
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}
            >
              <Link href="/about-us" passHref>
                <Button
                  sx={{
                    margin: isSmallScreen ? "10px 0px" : "10px 0px 10px 0px",
                  }}
                  fullWidth={isSmallScreen}
                >
                  About Us
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}
            >
              <Link href="/donorList" passHref>
                <Button
                  sx={{
                    margin: isSmallScreen ? "10px 0px" : "10px 0px 10px 0px",
                  }}
                  fullWidth={isSmallScreen}
                  variant="outlined"
                >
                  Search Donors
                </Button>
              </Link>
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
