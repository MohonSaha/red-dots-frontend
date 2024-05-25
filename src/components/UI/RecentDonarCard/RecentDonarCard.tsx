import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import avatar from "@/assets/svgs/avatar.png";
import { formatBloodType } from "@/utils/formatBloodType";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

const RecentDonarCard = ({ item }: { item: IUser }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
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
        direction="column"
        gap={5}
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ mb: 2 }}>
          <Image src={avatar} alt="avatar" height={70} width={70} />
        </Box>
        <Box>
          <Stack
            direction="row"
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Typography>Name</Typography>
              <Typography>Group</Typography>
              <Typography>Location</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{item?.name}</Typography>
              <Typography sx={{ fontWeight: 600 }}>
                {formatBloodType(item?.bloodType)}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>{item?.location}</Typography>
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
          title="Donor Details"
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
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
              onClick={handleShowDetails}
            />
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default RecentDonarCard;
