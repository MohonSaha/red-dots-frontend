import PopupModal from "@/components/shared/Modal/PopupModal";
import {
  useAcceptBloodPostMutation,
  useDeleteAcceptedPostMutation,
} from "@/redux/api/postApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const AcceptedPostCard = ({ item }: { item: IBloodPost }) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [acceptBloodPost] = useAcceptBloodPostMutation();
  const [deleteAcceptedPost] = useDeleteAcceptedPostMutation();

  const handleOpenModal = (itemId: string) => {
    setItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemId(null);
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (itemId) {
        const res = await deleteAcceptedPost(itemId).unwrap();
        if (res?.count > 0) {
          toast.success("Post rejected successfully!");
          setLoading(false);
          handleCloseModal();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        // backgroundColor: "white",
        backgroundImage:
          "linear-gradient(to bottom right, #FED7D5 0%, #f6f6f6 50%, #FED7D5 100%)",
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
        direction={{ md: "row", sm: "column", xs: "column" }}
        gap={2}
        justifyContent="space-around"
        alignItems="center"
      >
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
              <Typography>Donation Date</Typography>
              <Typography>Reason</Typography>
              <Typography>Total Bags</Typography>
              <Typography>Hospital Name</Typography>
              <Typography>Hospital Location</Typography>
              <Typography>Hospital Address</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.dateOfDonation}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.reason?.length > 15
                  ? `${item.reason.slice(0, 15)}...`
                  : item.reason}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.numberOfBags}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalName?.length > 15
                  ? `${item.hospitalName.slice(0, 15)}...`
                  : item.hospitalName}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalLocation}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalAddress?.length > 15
                  ? `${item.hospitalAddress.slice(0, 15)}...`
                  : item.hospitalAddress}
              </Typography>
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
          <Button
            sx={{ mr: 3, padding: "2px 10px" }}
            variant="contained"
            onClick={() => handleOpenModal(item.id)}
          >
            Reject
          </Button>
          <PopupModal
            loading={loading}
            open={isModalOpen}
            handleClose={handleCloseModal}
            handleConfirm={handleConfirm}
            title="Reject accepted post"
            message="Are you sure you want to reject this post?"
            okButton="Yes"
            cancelButtom="No"
          />
        </Box>

        <Tooltip
          title="Post Details"
          placement="bottom"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#cdd1da5c",
                color: "primary.main", // Change text color if
              },
            },
          }}
        >
          <Link href={`/posts-for-blood/details/${item?.id}`}>
            <ChevronRight
              sx={{
                cursor: "pointer",
                color: "primary.main",
                transition: "transform 0.3s",
                // mt: 1,
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
              //   onClick={handleShowDetails}
            />
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default AcceptedPostCard;
