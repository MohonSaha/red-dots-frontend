import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import smile from "@/assets/images/smile.png";

const OurServiceSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <Stack
          direction="row"
          gap={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Image src={smile} alt="Smile picture" />
          </Box>
          <Box>
            <Stack>
              <Box>
                <Typography variant="h6">Give blood</Typography>
                <Typography>
                  When you give blood with Vitalant, you save lives in your
                  community and beyond.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Give blood</Typography>
                <Typography>
                  When you give blood with Vitalant, you save lives in your
                  community and beyond.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Give blood</Typography>
                <Typography>
                  When you give blood with Vitalant, you save lives in your
                  community and beyond.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurServiceSection;
