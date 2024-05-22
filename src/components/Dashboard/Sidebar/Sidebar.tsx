import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
// import assets from "../../../assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { IUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.service";
import logo from "@/assets/svgs/logo.png";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  // solve hydration error
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box sx={{ background: "lightgray", height: "100vh" }}>
      <Stack
        sx={{
          mt: 1,
          mb: 0.7,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={logo} width={60} height={60} alt="logo" />
        <Typography
          variant="h5"
          color="primary.main"
          component="h1"
          fontWeight={700}
        >
          Red Dots
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as IUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
