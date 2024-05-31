"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import AccetpedDonorCard from "@/components/UI/AccetpedDonorCard/AccetpedDonorCard";
import { useGetSinglePostQuery } from "@/redux/api/postApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Container, Stack, Typography } from "@mui/material";

type TParams = {
  params: {
    postId: string;
  };
};

const BloodPostDetails = ({ params }: TParams) => {
  const { data, isLoading } = useGetSinglePostQuery(params?.postId);

  if (isLoading) {
    return <DonorLoadingPage />;
  }

  return (
    <Container sx={{ my: 6 }}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "15px",
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
          direction={{ md: "row", sm: "column" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Box>
            <Stack
              direction="row"
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography>Donation Date</Typography>
                <Typography>Reason</Typography>
                <Typography>Total Bags</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  {data?.dateOfDonation}
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{data?.reason}</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {data?.numberOfBags}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ fontWeight: 600, fontSize: 80 }}>O+</Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography>Hospital Name</Typography>
                <Typography>Hospital Location</Typography>
                <Typography>Hospital Address</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  {data?.hospitalName}
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {data?.hospitalLocation}
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {data?.hospitalAddress}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Stack
          direction={{ md: "row", sm: "column" }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              width: "48%",
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
            <Typography sx={{ textAlign: "center", mb: 4, fontWeight: 600 }}>
              Requester Info
            </Typography>
            <Box>
              <Stack direction="row" gap={3}>
                <Box>
                  <Typography>Name</Typography>
                  <Typography>Email</Typography>
                  <Typography>Location</Typography>
                  <Typography>Blood Group</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#4A6FFB" }}>
                    {data?.requester?.name}
                  </Typography>
                  <Typography sx={{ color: "#4A6FFB" }}>
                    {data?.requester?.email}
                  </Typography>
                  <Typography sx={{ color: "#4A6FFB" }}>
                    {data?.requester?.location}
                  </Typography>
                  <Typography sx={{ color: "#4A6FFB" }}>
                    {formatBloodType(data?.requester?.bloodType)}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              width: "48%",
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
            <Typography sx={{ textAlign: "center", mb: 4, fontWeight: 600 }}>
              Managed Donors
            </Typography>
            {data && data.acceptedDonors.length === 0 ? (
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  color: "primary.main",
                }}
              >
                No managed donor. Donate please!
              </Typography>
            ) : (
              data?.acceptedDonors?.map((item: any) => (
                <AccetpedDonorCard key={item.id} item={item} />
              ))
            )}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default BloodPostDetails;
