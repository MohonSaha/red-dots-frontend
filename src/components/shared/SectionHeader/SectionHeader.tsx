import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const SectionHeader = ({ sectionHeader }: { sectionHeader: string }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "30px"; // Default size for larger screens (lg and up)
  }
  return (
    <Box textAlign="left" sx={{ mb: 2 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          fontSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sectionHeader}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
