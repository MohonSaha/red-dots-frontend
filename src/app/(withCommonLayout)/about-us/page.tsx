import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const AboutUsPage = () => {
  return (
    <Container>
      <Box sx={{ my: 8 }}>
        <Grid
          //   direction={{ md: "row", sm: "column" }}
          //   justifyContent="space-between"
          //   gap={5}
          spacing={{ md: 20, sm: 5, xs: 5 }}
          container
        >
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography>
                Red Dots is an automated blood service that connect blood
                searchers with voluntary blood donors in a moment through SMS
                and website. Red Dots is a free service for all. Red Dots
                started its journey in 2024.
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Why Red Dots?
              </Typography>
              <Typography>
                Though Bangladesh has more than 160 million people, the number
                of safe blood bank is very few. Without divisional towns, there
                is hardly any blood bank. But a huge amount of blood is needed
                for treatment purposes. A good number of accidents take place
                every day where blood needs essentially. As a result, people
                fall in real trouble to manage blood. But there are many blood
                donors who are interested in donating blood but do not know who
                needs blood. The communication gap is resulting in the loss of
                many lives.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Vision
              </Typography>
              <Typography>
                Ensuring no more death just for the need of blood
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Mission
              </Typography>
              <Typography>
                Connecting blood searchers with voluntary blood donors in a
                moment with the use of technology.
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Objectives
              </Typography>
              <Typography>
                Encouraging voluntary blood donation Creating awareness about
                safe blood transfer Enabling people to place blood request via
                SMS, website, or facebook Connecting voluntary blood donors via
                SMS or email
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
