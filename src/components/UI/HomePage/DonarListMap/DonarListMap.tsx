import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

const donors = [
  { name: "Dhaka", count: 240, x: "20%", y: "20%" },
  { name: "Chattogram", count: 80, x: "40%", y: "30%" },
  { name: "Barishal", count: 90, x: "60%", y: "40%" },
  { name: "Khulna", count: 120, x: "80%", y: "50%" },
  { name: "Rajshahi", count: 130, x: "25%", y: "60%" },
  { name: "Cumilla", count: 180, x: "45%", y: "65%" },
  { name: "Faridpur", count: 55, x: "60%", y: "80%" },
  { name: "Magura", count: 45, x: "80%", y: "20%" },
  { name: "Jashore", count: 50, x: "10%", y: "50%" },
  { name: "Narayanganj", count: 65, x: "30%", y: "90%" },
];

const MapContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "500px",

  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
});

const DonorMarker = styled(Box)(({ theme }) => ({
  position: "absolute",
  textAlign: "center",
  color: "#fff",
  "& .marker": {
    width: "80px",
    height: "80px",
    borderRadius: "100% 100% 100% 30%",
    backgroundColor: theme.palette.primary.main,
  },
  animation: "none",
  "@keyframes blink": {
    "0%, 100%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
  },
}));

const DonorMap: React.FC = () => {
  const [blinkingIndices, setBlinkingIndices] = useState<number[]>([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  let fontSize;

  if (isSmallScreen) {
    fontSize = "22px"; // Adjust for optimal mobile readability
  } else {
    fontSize = "40px"; // Default size for larger screens (lg and up)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newBlinkingIndices = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * donors.length)
      );
      setBlinkingIndices(newBlinkingIndices);
      setTimeout(() => setBlinkingIndices([]), 6000); // Clear blinking state after 5 seconds
    }, 5000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        mb: 0,
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={600} sx={{ fontSize }}>
          We&#39;re a network of
        </Typography>
      </Box>
      <MapContainer>
        {donors.map((donor, index) => (
          <DonorMarker
            key={index}
            style={{
              left: donor.x,
              top: donor.y,
              animation: blinkingIndices.includes(index) ? "blink 5s" : "none",
            }}
          >
            <WhereToVoteIcon sx={{ color: "primary.main", fontSize: 70 }} />
            <Typography variant="caption" sx={{ color: "primary.main" }}>
              {donor.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: 600 }}
            >
              {donor.count} donors
            </Typography>
          </DonorMarker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default DonorMap;
