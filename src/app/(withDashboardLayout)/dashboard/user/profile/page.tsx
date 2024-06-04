"use client";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import avatar from "@/assets/svgs/avatar.png";
import Image from "next/image";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { formatBloodType } from "@/utils/formatBloodType";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlakyIcon from "@mui/icons-material/Flaky";
import { useEffect, useState } from "react";
import {
  calculateCountdown,
  getNextDonationDate,
} from "@/utils/nextDonationDate";
import CountdownTimer from "@/components/shared/CountDown/CountdownTimer";
import Link from "next/link";

const UserProfilePage = () => {
  const [donationDate, setDonationDate] = useState<{
    nextDonationDate: Date;
    countdown: {
      months: number;
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  } | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, isLoading } = useGetSingleUserQuery({});

  useEffect(() => {
    if (!isLoading && data?.userProfile?.lastDonationDate) {
      const date = String(data.userProfile.lastDonationDate);
      const nextDate = getNextDonationDate(date);
      setDonationDate(nextDate);

      const interval = setInterval(() => {
        setDonationDate((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              countdown: calculateCountdown(prevState.nextDonationDate),
            };
          }
          return prevState;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          backgroundColor: "#f3f3f9",
          borderRadius: "8px",
          py: 6,
          px: 4,
        }}
      >
        <Grid spacing={{ md: 2, sm: 5, xs: 5 }} container>
          <Grid item md={8} sm={12} xs={12}>
            <Stack
              direction={{ md: "row", sm: "column", xs: "column" }}
              spacing={2}
            >
              <Box
                sx={{
                  border: `3px solid #dbdbdb`,
                  borderRadius: "50%",
                  padding: "10px",
                  height: "75px",
                  width: "75px",
                }}
              >
                <Image src={avatar} alt="avatar" height={50} width={50} />
              </Box>
              <Box>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  component="h4"
                  sx={{ fontWeight: 600 }}
                >
                  {data?.name}
                </Typography>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontWeight: 600, mr: 1 }}>
                      Email:
                    </Typography>
                    {data?.email}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <Link href={`/dashboard/user/profile/edit-my-profile`}>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={false}
              >
                Edit Profile
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Grid container spacing={4}>
            <Grid item md={7} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction={{ md: "row", sm: "column", xs: "column" }}
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  gap={3}
                >
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 30px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      <LocationOnIcon sx={{ mr: "2px", color: "#486AFF" }} />
                      {data?.location}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 50px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      <BloodtypeIcon sx={{ mr: "2px", color: "#eb2c29" }} />
                      {formatBloodType(data?.bloodType)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 30px",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}
                    >
                      {data?.availability === false ? (
                        <FlakyIcon sx={{ mr: "2px", color: "#F7A511" }} />
                      ) : (
                        <FlakyIcon sx={{ mr: "2px", color: "green" }} />
                      )}

                      {data?.availability === false
                        ? "Not Available"
                        : "Available"}
                    </Typography>
                  </Box>
                </Stack>

                <Box mt={3}>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px",
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <Typography fontWeight={550} mr={1}>
                      My Message:
                    </Typography>
                    {data?.userProfile?.bio}
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item md={5} sm={12} xs={12}>
              <Box
                sx={{
                  backgroundColor: "#dbdbdb",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "95%",
                  height: "100%",
                }}
              >
                {/* <Box>
                  <Typography variant="h6" component="div">
                    Previous Donation Date
                  </Typography>
                  <Typography>{data?.userProfile?.lastDonationDate}</Typography>
                </Box> */}
                {donationDate && (
                  <CountdownTimer nextDonationDate={donationDate} />
                )}

                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 600 }}>
                    Nest Donation Date
                  </Typography>
                  {donationDate && (
                    <Typography>
                      {
                        donationDate.nextDonationDate
                          .toISOString()
                          .split("T")[0]
                      }
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={3}>
          <Stack
            direction={{ md: "row", sm: "column", xs: "column" }}
            gap={3}
            sx={{
              width: "99%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                padding: "20px 30px",
                display: "flex",
              }}
            >
              Height:
              <Typography ml={1}>
                {data?.userProfile?.height === null
                  ? "00"
                  : data?.userProfile?.height}{" "}
                Cm
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                padding: "20px 30px",
                display: "flex",
              }}
            >
              Weight:
              <Typography ml={1}>
                {data?.userProfile?.weight === null
                  ? "00"
                  : data?.userProfile?.weight}{" "}
                Kg
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                padding: "20px 30px",
                display: "flex",
              }}
            >
              Allergies:
              <Typography ml={1}>
                {data?.userProfile?.hasAllergies === false ? "NO" : "Yes"}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                padding: "20px 30px",
                display: "flex",
              }}
            >
              Diabetes:
              <Typography ml={1}>
                {data?.userProfile?.hasDiabetes === false ? "NO" : "Yes"}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                padding: "20px 30px",
                display: "flex",
              }}
            >
              Age:
              <Typography ml={1}>{data?.userProfile?.age}</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default UserProfilePage;
