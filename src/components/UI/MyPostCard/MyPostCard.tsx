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

const MyPostCard = ({ item }: { item: IBloodPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [acceptBloodPost] = useAcceptBloodPostMutation();
  const [deleteAcceptedPost] = useDeleteAcceptedPostMutation();

  console.log(item.acceptedDonors.length);
  console.log(item);

  const handleOpenModal = (itemId: string) => {
    setItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemId(null);
  };

  const handleConfirm = async () => {
    try {
      if (itemId) {
        const res = await deleteAcceptedPost(itemId).unwrap();
        if (res?.count > 0) {
          toast.success("Post rejected successfully!");
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
        direction="row"
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
              <Typography sx={{ fontWeight: 600 }}>{item?.reason}</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.numberOfBags}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalName}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalLocation}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {item?.hospitalAddress}
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 3,
            gap: "3px",
            mt: "3px",
          }}
        >
          <Typography sx={{ color: "primary.main" }}>
            Accepted Donor:
          </Typography>
          <Tooltip
            title={
              item?.acceptedDonors?.length
                ? item.acceptedDonors
                    .slice(0, 5)
                    .map((donor) => donor.donor.name)
                    .concat(
                      item.acceptedDonors.length > 5
                        ? [`and ${item.acceptedDonors.length - 5} more...`]
                        : []
                    )
                    .join("\n")
                : "No donors"
            }
            placement="top"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#E1E1E1",
                  color: "primary.main",
                  whiteSpace: "pre-line",
                },
              },
            }}
          >
            <Typography sx={{ color: "primary.main", fontWeight: 600 }}>
              {item?.acceptedDonors?.length}
            </Typography>
          </Tooltip>
        </Box>
        <Tooltip
          title="Post Details"
          placement="bottom"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#cdd1da5c",
                color: "primary.main",
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

export default MyPostCard;
