import React from "react";
import { Box, Typography, CircularProgress, styled } from "@mui/material";

interface CountdownProps {
  nextDonationDate: {
    countdown: {
      months: number;
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
}

const CountdownTimer = ({ nextDonationDate }: CountdownProps) => {
  const { countdown } = nextDonationDate;

  const renderSegment = (value: number, label: string, max: number) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        {/* Modified CircularProgress component with static color */}
        <CircularProgress
          variant="determinate"
          value={(value / max) * 100}
          size={50}
          thickness={4}
          sx={{
            color: "#767B99",
            backgroundColor: "#CBCBCB",
            borderRadius: "50%",
            width: "10%",
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="primary.main"
            sx={{ fontWeight: 600 }}
          >
            {value.toString().padStart(2, "0")}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" component="div" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {renderSegment(countdown.months, "Months", 4)}
      {renderSegment(countdown.days, "Days", 30)}
      {renderSegment(countdown.hours, "Hours", 24)}
      {renderSegment(countdown.minutes, "Minutes", 60)}
      {renderSegment(countdown.seconds, "Seconds", 60)}
    </Box>
  );
};

export default CountdownTimer;
