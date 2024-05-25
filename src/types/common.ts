import { USER_ROLE } from "@/constants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const BloodGroups = [
  "O_POSITIVE",
  "O_NEGATIVE",
  "A_POSITIVE",
  "A_NEGATIVE",
  "B_POSITIVE",
  "B_NEGATIVE",
  "AB_POSITIVE",
  "AB_NEGATIVE",
];

export const DonateOption = ["YES", "NO"];

export const UserRoleOption = ["ADMIN", "USER"];

export const ActiveStatusOption = ["ACTIVATE", "DEACTIVATE"];

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type IUserRole = keyof typeof USER_ROLE;

export interface DrawerItems {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItems[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: number | string;
  message: string;
};

export const Districts = [
  "Dhaka",
  "Chattogram",
  "Barishal",
  "Khulna",
  "Rajshahi",
  "Cumilla",
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chapainawabganj",
  "Chuadanga",
  "Cox's Bazar",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachari",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

export const DonorType = ["All", "Eligible"];
