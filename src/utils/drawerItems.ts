//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { DrawerItems, IUserRole } from "@/types";
import { USER_ROLE } from "@/constants/role";
// import GroupIcon from '@mui/icons-material/Group';
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export const drawerItems = (role: IUserRole): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manageUsers`,
          icon: GroupIcon,
        }
        // {
        //   title: "Doctors",
        //   path: `${role}/doctors`,
        //   icon: MedicalInformationIcon,
        // }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Requests",
          path: `${role}/my-blood-donation-request`,
          icon: PersonSearchIcon,
        },
        {
          title: "Received Requests",
          path: `${role}/donation-request-for-blood`,
          icon: BloodtypeIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
