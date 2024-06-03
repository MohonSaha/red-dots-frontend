import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import avater1 from "@/assets/images/test-1.jpg";
import avater2 from "@/assets/images/test-2.jpg";
import avater3 from "@/assets/images/test-3.jpg";

const Testimonials = () => {
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to top right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
        pb: 5,
        py: 8,
      }}
    >
      <Box>
        <Container>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" fontWeight={600}>
              Testimonials
            </Typography>
          </Box>

          <Stack
            direction={{ md: "row", sm: "column" }}
            justifyContent={{ md: "space-between", xs: "center" }}
            gap={{ xs: 5 }}
          >
            <Card sx={{ maxWidth: 345, padding: "20px 10px" }}>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "600" }}
                  color="text.secondary"
                >
                  I want to help wherever I can and lead by example. Donating
                  blood is a small way to give back and it does so in such a
                  mighty way.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "120px", // Set the width and height to the diameter of the circle
                  height: "120px",
                  borderRadius: "50%", // Make the box circular
                  overflow: "hidden", // Ensure the image stays within the circle
                  margin: "10px auto", // Center the circle horizontally
                  position: "relative",
                }}
              >
                <Image
                  src={avater1}
                  alt="avatar"
                  fill // Fill the entire box with the image
                  style={{ objectFit: "cover", objectPosition: "center" }} // Cover the entire box without stretching the image
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Hasibul Hasan
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  BLOOD DONOR
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, padding: "20px 10px" }}>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "600" }}
                  color="text.secondary"
                >
                  One donation can help up to three different people, so that
                  makes me feel really good. The payback is unbelievable.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "120px", // Set the width and height to the diameter of the circle
                  height: "120px",
                  borderRadius: "50%", // Make the box circular
                  overflow: "hidden", // Ensure the image stays within the circle
                  margin: "10px auto", // Center the circle horizontally
                  position: "relative",
                }}
              >
                <Image
                  src={avater2}
                  alt="avatar"
                  fill // Fill the entire box with the image
                  style={{ objectFit: "cover", objectPosition: "center" }} // Cover the entire box without stretching the image
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Khabirul Shanto
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  BLOOD & PLATELET DONOR
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, padding: "20px 10px" }}>
              <CardContent>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "600" }}
                  color="text.secondary"
                >
                  I was surprised by how quick and painless the blood donation
                  process was. The facility was clean and well-organized.
                </Typography>
              </CardContent>
              <Box
                sx={{
                  width: "120px", // Set the width and height to the diameter of the circle
                  height: "120px",
                  borderRadius: "50%", // Make the box circular
                  overflow: "hidden", // Ensure the image stays within the circle
                  margin: "10px auto", // Center the circle horizontally
                  position: "relative",
                }}
              >
                <Image
                  src={avater3}
                  alt="avatar"
                  fill // Fill the entire box with the image
                  style={{ objectFit: "cover", objectPosition: "center" }} // Cover the entire box without stretching the image
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Fazley Rabby
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  BLOOD DONOR
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Testimonials;
