import { Box, Stack, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import React from "react";

const blinkEffect = {
  animation: "blink 1.5s ease-in-out infinite",
  "@keyframes blink": {
    "0%": { backgroundColor: "#dbdbdb" },
    "50%": { backgroundColor: "#e7e7e7" },
    "100%": { backgroundColor: "#dbdbdb" },
  },
};

const PostLoadingCard = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
        padding: "30px 20px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
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
            ...blinkEffect,
            padding: "50px 50px",
            borderRadius: 3,
            mt: 1,
          }}
        ></Box>
        <Box>
          <Stack
            direction="row"
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              {[...Array(6)].map((_, index) => (
                <Typography
                  key={index}
                  sx={{
                    ...blinkEffect,
                    padding: "5px 40px",
                    borderRadius: 3,
                    mt: 1,
                  }}
                ></Typography>
              ))}
            </Box>
            <Box>
              {[...Array(6)].map((_, index) => (
                <Typography
                  key={index}
                  sx={{
                    ...blinkEffect,
                    padding: "5px 40px",
                    borderRadius: 3,
                    mt: 1,
                  }}
                ></Typography>
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Box>
          <Typography
            sx={{
              ...blinkEffect,
              padding: "16px 50px",
              borderRadius: 2,
              mr: 3,
            }}
          ></Typography>
        </Box>
        <ChevronRight
          sx={{
            cursor: "pointer",
            color: "primary.main",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateX(5px)",
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default PostLoadingCard;
