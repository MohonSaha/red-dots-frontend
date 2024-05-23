import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
// import avatar from "@/assets/svgs/avatar.png";
import { ChevronRight } from "@mui/icons-material";

const DonorLoadingCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        // width: "350px",
        boxShadow:
          "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow:
            "0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Stack
        direction="row"
        gap={5}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            backgroundColor: "#dbdbdb",
            padding: "50px 50px",
            borderRadius: 3,
            mt: 1,
          }}
        >
          {/* <Image src={avatar} alt="avatar" height={70} width={70} /> */}
        </Box>
        <Box>
          <Stack
            direction="row"
            gap={3}
            justifyContent="center"
            alignItems="center"
            // sx={{ backgroundColor: "gray" }}
          >
            <Box>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
              <Typography
                sx={{
                  backgroundColor: "#dbdbdb",
                  padding: "5px 40px",
                  borderRadius: 3,
                  mt: 1,
                }}
              ></Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default DonorLoadingCard;
