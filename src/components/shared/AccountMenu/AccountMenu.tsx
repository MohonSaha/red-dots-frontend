import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import userLogo from "@/assets/svgs/userham.png";
import Image from "next/image";
import { getUserInfo, removeUser } from "@/services/auth.service";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { keyframes } from "@emotion/react";
import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { logoutUser } from "@/services/actions/logoutUser";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.9);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

// const menuStyles = {
//   paper: {
//     elevation: 0,
//     overflow: "visible",
//     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//     mt: 1.5,
//     "& .MuiAvatar-root": {
//       width: 32,
//       height: 32,
//       ml: -0.5,
//       mr: 1,
//     },
//     "&:before": {
//       content: '""',
//       display: "block",
//       position: "absolute",
//       top: 0,
//       right: 14,
//       width: 10,
//       height: 10,
//       bgcolor: "background.paper",
//       transform: "translateY(-50%) rotate(45deg)",
//       zIndex: 0,
//     },
//   },
// };

export default function AccountMenu({ color }: { color: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const [userRole, setUserRole] = React.useState("");
  React.useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logoutUser(router);
  };

  const openDashboard = () => {
    setAnchorEl(null);
    router.push(`/dashboard/${userRole}`);
  };

  const openProfile = () => {
    setAnchorEl(null);
    router.push(`/dashboard/${userRole}/profile`);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip
          title="Account settings"
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#cdd1da5c",
                color: "primary.main", // Change text color if necessary
              },
            },
          }}
        >
          {/* <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            //   size='small'
            sx={{
              background: "#ffffff",
              "& svg": {
                color: "primary.main",
              },
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton> */}
          <IconButton onClick={handleClick} sx={{ p: 0 }}>
            {/* <Box
              sx={{
                border: `3px solid ${color}`,
                borderRadius: "50%",
                padding: "6px 6px 8px 10px",
              }}
            >
              <Image alt="Remy Sharp" src={userLogo} height={25} width={25} />
            </Box> */}

            <Box
              sx={{
                border: `3px solid white`,
                borderRadius: "50%",
                padding: "6px 6px 8px 10px",
                display: "inline-block",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",
                  animation: `${pulse} 2s infinite`,
                },
              }}
            >
              <Image alt="Remy Sharp" src={userLogo} height={25} width={25} />
            </Box>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={
          {
            // ...menuStyles,
          }
        }
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box sx={{ paddingX: "2px" }}>
          <MenuItem
            onClick={openProfile}
            sx={{
              width: "160px",
            }}
          >
            <Box>
              <PersonIcon
                sx={{ background: "transparent", color: "black", mr: "5px" }}
              />
            </Box>
            <Box sx={{ width: "50%", fontWeight: 600, mt: "2px" }}>Profile</Box>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={openDashboard}
            sx={{ display: "flex", justifyContent: "start", width: "160px" }}
          >
            <Box>
              <DashboardIcon
                sx={{ background: "transparent", color: "black", mr: "5px" }}
              />
            </Box>
            <Box sx={{ width: "50%", fontWeight: 600, mt: "2px" }}>
              Dashboard
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleLogout}
            sx={{
              display: "flex",
              width: "160px",
              justifyContent: "start",
            }}
          >
            <Box>
              <Logout sx={{ color: "error.main", mr: "5px" }} />
            </Box>
            <Box sx={{ width: "50%", fontWeight: 600, mt: "2px" }}>Logout</Box>
          </MenuItem>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
