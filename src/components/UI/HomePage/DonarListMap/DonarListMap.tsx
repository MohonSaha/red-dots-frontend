import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

const donors = [
  { name: "Location 1", count: 10, x: "20%", y: "20%" },
  { name: "Location 2", count: 15, x: "40%", y: "30%" },
  { name: "Location 3", count: 20, x: "60%", y: "40%" },
  { name: "Location 4", count: 25, x: "80%", y: "50%" },
  { name: "Location 5", count: 30, x: "25%", y: "60%" },
  { name: "Location 6", count: 35, x: "45%", y: "65%" },
  { name: "Location 7", count: 40, x: "60%", y: "80%" },
  { name: "Location 8", count: 45, x: "80%", y: "20%" },
  { name: "Location 9", count: 50, x: "10%", y: "50%" },
  { name: "Location 10", count: 55, x: "30%", y: "90%" },
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
    <Box sx={{ mb: 10, backgroundColor: "#f6f6f6", minHeight: "100vh", py: 6 }}>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={600}>
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
            <Typography variant="body2" sx={{ color: "red" }}>
              {donor.count} donors
            </Typography>
          </DonorMarker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default DonorMap;
