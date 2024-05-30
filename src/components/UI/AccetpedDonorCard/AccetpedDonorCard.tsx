import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Typography } from "@mui/material";
import React from "react";

const AccetpedDonorCard = ({ item }: { item: any }) => {
  return (
    <Box
      key={item?.id}
      sx={{
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography>{item.donor.name}</Typography>
      <Typography>{item.donor.location}</Typography>
      <Typography>{formatBloodType(item.donor.bloodType)}</Typography>
    </Box>
  );
};

export default AccetpedDonorCard;
