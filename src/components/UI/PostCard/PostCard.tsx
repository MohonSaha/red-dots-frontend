import { formatBloodType } from "@/utils/formatBloodType";
import { ChevronRight } from "@mui/icons-material";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";

const PostCard = ({ item }: { item: IBloodPost }) => {
  console.log(item);
  return (
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
        // sx={{ mt: 3 }}
      >
        {/* <Typography>Show More</Typography> */}
        <Tooltip
          title="Post Details"
          placement="left"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#cdd1da5c",
                color: "primary.main", // Change text color if necessary
              },
            },
          }}
        >
          <Link href={`/donorList/details/${item?.id}`}>
            <ChevronRight
              sx={{
                cursor: "pointer",
                color: "primary.main",
                transition: "transform 0.3s",
                mt: 1,
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

export default PostCard;
