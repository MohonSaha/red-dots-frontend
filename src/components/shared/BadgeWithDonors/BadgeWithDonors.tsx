import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { RootState } from "@/redux/store";

const BadgeWithDonors = () => {
  const selectedDonors = useSelector((state: RootState) => state.groupMail);

  return (
    <Badge
      color="secondary"
      sx={{ color: "#2e7df8" }}
      badgeContent={selectedDonors.length === 0 ? "0" : selectedDonors.length}
    >
      <ForwardToInboxIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
    </Badge>
  );
};

export default BadgeWithDonors;
