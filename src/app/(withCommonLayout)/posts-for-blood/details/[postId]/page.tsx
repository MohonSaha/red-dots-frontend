"use client";
import DonorLoadingPage from "@/app/(withCommonLayout)/donorList/loading";
import AccetpedDonorCard from "@/components/UI/AccetpedDonorCard/AccetpedDonorCard";
import PopupModal from "@/components/shared/Modal/PopupModal";
import {
  useAcceptBloodPostMutation,
  useGetSinglePostQuery,
} from "@/redux/api/postApi";
import { isLoggedIn } from "@/services/auth.service";
import { formatBloodType } from "@/utils/formatBloodType";
import {
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type TParams = {
  params: {
    postId: string;
  };
};

const BloodPostDetails = ({ params }: TParams) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [acceptBloodPost] = useAcceptBloodPostMutation();

  const handleOpenModal = (itemId: string) => {
    if (!isLoggedIn()) {
      toast.warning("Please login frist to donate blood!");
      return router.push("/login");
    } else {
      setItemId(itemId);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemId(null);
  };

  const handleConfirm = async () => {
    setLoading(true);
    const data = {
      bloodPostId: itemId,
    };

    try {
      const res = await acceptBloodPost(data).unwrap();

      if (res?.id) {
        toast.success("Accepted successfully!");
        setLoading(false);
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useGetSinglePostQuery(params?.postId);

  if (isLoading) {
    return (
      <Container>
        <Box sx={{ my: 6 }}>
          {Array.from(new Array(7)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={52}
              sx={{ mb: 2 }}
            />
          ))}
        </Box>
      </Container>
    );
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
          gap={{ md: 8, sm: 3, xs: 3 }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              width: "100%",
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
              width: "100%",
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
              Managed Donors: {data?.acceptedDonors?.length}
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

            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Button
                sx={{
                  mr: 3,
                  padding: "2px 10px",
                }}
                variant="contained"
                onClick={() => handleOpenModal(params?.postId)}
              >
                Donate Now
              </Button>
              <PopupModal
                loading={loading}
                open={isModalOpen}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirm}
                title="Donate Blood"
                message="Are you sure you want to donote blood?"
                okButton="Confirm"
                cancelButtom="Cancel"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default BloodPostDetails;
