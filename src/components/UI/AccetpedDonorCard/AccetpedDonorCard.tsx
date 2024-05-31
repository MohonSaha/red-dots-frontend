import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Stack, Typography } from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlakyIcon from "@mui/icons-material/Flaky";
import PersonIcon from "@mui/icons-material/Person";

const AccetpedDonorCard = ({ item }: { item: any }) => {
  return (
    <Box
      key={item?.id}
      sx={{
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            <PersonIcon />
            {item.donor.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            <LocationOnIcon />
            {item.donor.location}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            <BloodtypeIcon />
            {formatBloodType(item.donor.bloodType)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AccetpedDonorCard;
