"use client";
import { useGetSingleDonorQuery } from "@/redux/api/userApi";
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
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetailsPage = ({ params }: TParams) => {
  // const [requestInfo, setRequestInfo] = useState({});
  const [user, setUser] = useState({});
  const RequestForBlood = dynamic(
    () => import("@/components/shared/RequestForBlood/RequestForBlood"),
    { ssr: false }
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, isLoading } = useGetSingleDonorQuery(params?.donorId);
  const userInfo = getUserInfo();

  // // solve hydration error
  useEffect(() => {
    const userInfo = getUserInfo() as any;
    setUser(userInfo);
  }, []);

  return (
    <Container>
      <Box sx={{ my: 8 }}>
        <Grid spacing={{ md: 20, sm: 5, xs: 5 }} container>
          <Grid item md={6} sm={12} xs={12} order={{ xs: 2, sm: 2, md: 1 }}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h4"
              sx={{ fontWeight: 600 }}
            >
              Profile of {data?.name}
            </Typography>
            <Box>
              <Stack direction="row" gap={3} sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <BloodtypeIcon sx={{ mr: "2px" }} />
                  {formatBloodType(data?.bloodType)}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <LocationOnIcon sx={{ mr: "2px" }} />
                  {data?.location}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <FlakyIcon sx={{ mr: "2px" }} />
                  {data?.availability === false ? "Not Available" : "Available"}
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                mt: 2,
                backgroundColor: "#dbdbdb",
                borderRadius: "8px",
                height: "80px",
              }}
            >
              <Typography sx={{ padding: "10px 8px" }}>
                Bio: {data?.userProfile?.bio}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12} order={{ xs: 1, sm: 1, md: 2 }}>
            <Box
              sx={{
                border: `3px solid #dbdbdb`,
                borderRadius: "20px",
                padding: "10px",
                width: 180,
              }}
            >
              <Image src={avatar} alt="avatar" height={160} width={160} />
            </Box>
          </Grid>
        </Grid>

        <>
          {user ? (
            <Container>
              <RequestForBlood donorId={params?.donorId} />
            </Container>
          ) : (
            <Link href="/login">
              <Button
                sx={{
                  margin: "10px 0px",
                }}
              >
                Login To Request For Blood
              </Button>
            </Link>
          )}
        </>
      </Box>
    </Container>
  );
};

export default DonorDetailsPage;
