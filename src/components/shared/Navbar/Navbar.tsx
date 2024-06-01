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
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import navLogo from "@/assets/svgs/reg-logo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import mobileLogo from "@/assets/svgs/logo.png";

const drawerWidth = 240;

const AuthButton = dynamic(
  () => import("@/components/UI/AuthButton/AuthButton"),
  { ssr: false }
);

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const userInfo = getUserInfo();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 2.5,
          gap: 1,
        }}
      >
        <Link href="/">
          <Box>
            <Image height={35} width={35} src={mobileLogo} alt="blood" />
          </Box>
        </Link>

        <Link href="/">
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: 28,
            }}
          >
            Red Dots
          </Typography>
        </Link>
      </Box>
      <Divider />

      <Stack direction="column" gap={4}>
        {[
          "/",
          "/donorList",
          "/create-post",
          "/posts-for-blood",
          "/about-us",
        ].map((path, index) => (
          <Typography
            key={index}
            component={Link}
            href={path}
            sx={{
              color: pathname === path ? theme.palette.primary.main : "black",
              mt: index === 0 ? 4 : 0,
              fontWeight: 600,
            }}
          >
            {path === "/"
              ? "Home"
              : path === "/donorList"
              ? "Search Donors"
              : path === "/create-post"
              ? "Create Post"
              : path === "/posts-for-blood"
              ? "Donate Now"
              : "About Us"}
          </Typography>
        ))}
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
                {[
                  "/",
                  "/donorList",
                  "/create-post",
                  "/posts-for-blood",
                  "/about-us",
                ].map((path, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    href={path}
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                        bottom: "-2px",
                        left: 0,
                        transform:
                          pathname === path ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "bottom right",
                        transition: "transform 0.25s ease-out",
                      },
                    }}
                  >
                    {path === "/"
                      ? "Home"
                      : path === "/donorList"
                      ? "Search Donors"
                      : path === "/create-post"
                      ? "Create Post"
                      : path === "/posts-for-blood"
                      ? "Donate Now"
                      : "About Us"}
                  </Typography>
                ))}
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
};

export default Navbar;
