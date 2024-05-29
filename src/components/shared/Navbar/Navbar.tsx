"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import navLogo from "@/assets/svgs/reg-logo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

export default function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const userInfo = getUserInfo();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 700, my: 2.5 }}>
        Red Dots
      </Typography>
      <Divider />

      <Stack direction="column" gap={4}>
        <Typography
          component={Link}
          href="/"
          sx={{
            color: "black",
            mt: 4,
            fontWeight: 600,
          }}
        >
          Home
        </Typography>
        <Typography
          component={Link}
          href="/donorList"
          sx={{
            color: "black",
            fontWeight: 600,
          }}
        >
          Donor List
        </Typography>
        <Typography
          component={Link}
          href="/health-plans"
          sx={{
            color: "black",
            fontWeight: 600,
          }}
        >
          Health Plans
        </Typography>
        <Typography
          component={Link}
          href="/login"
          sx={{
            color: "black",
            fontWeight: 600,
          }}
        >
          Medicins
        </Typography>
        <Typography
          component={Link}
          href="/about-us"
          sx={{
            color: "black",
            fontWeight: 600,
            // transition: "transform 3s ease-in-out",
            // "&:hover": {
            //   // transform: "scale(1.1)",
            //   backgroundColor: "gray",
            //   paddingY: "10px",
            //   transition: "transform 0.4s ease-in-out",
            //   borderRight: "4px solid red",
            // },
          }}
        >
          About Us
        </Typography>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "70px" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ height: "70px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Box sx={{ display: isSmallScreen ? "none" : "block" }}>
                <Image height={50} width={50} src={navLogo} alt="blood" />
              </Box>
            </Link>

            <Link href="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex", sm: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: { md: 35, sm: 20 },
                }}
              >
                Red Dots
              </Typography>
            </Link>
          </Box>

          <Stack
            py={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={5}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Stack direction="row" gap={4} justifyContent="space-between">
                <Typography
                  component={Link}
                  href="/"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    transition: "transform 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  href="/donorList"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    transition: "transform 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Search Donors
                </Typography>
                <Typography
                  component={Link}
                  href="/create-post"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    transition: "transform 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Create Post
                </Typography>
                <Typography
                  component={Link}
                  href="/posts-for-blood"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    transition: "transform 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Donate Now
                </Typography>
                <Typography
                  component={Link}
                  href="/about-us"
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    transition: "transform 0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  About Us
                </Typography>
              </Stack>
            </Box>

            <AuthButton />
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
