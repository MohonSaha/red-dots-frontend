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

export const DonateOption = ["YES", "NO"];

export const UserRoleOption = ["ADMIN", "USER"];

export const ActiveStatusOption = ["ACTIVATE", "DEACTIVATE"];

export const Gender = ["MALE", "FEMALE"];

export const BooleanOption = ["YES", "NO"];

export const RequestStatusOption = ["PENDING", "APPROVED"];

export const TotalBloodBags = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

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

export const SearchBloodGroups = [
  { label: "Select All", value: undefined },
  { label: "A+", value: "A_POSITIVE" },
  { label: "A-", value: "A_NEGATIVE" },
  { label: "B+", value: "B_POSITIVE" },
  { label: "B-", value: "B_NEGATIVE" },
  { label: "AB+", value: "AB_POSITIVE" },
  { label: "AB-", value: "AB_NEGATIVE" },
  { label: "O+", value: "O_POSITIVE" },
  { label: "O-", value: "O_NEGATIVE" },
] as { label: string; value: string | undefined }[];

export const SearchDistricts = [
  { label: "Select All", value: undefined },
  { label: "Dhaka", value: "Dhaka" },
  { label: "Chattogram", value: "Chattogram" },
  { label: "Barishal", value: "Barishal" },
  { label: "Khulna", value: "Khulna" },
  { label: "Rajshahi", value: "Rajshahi" },
  { label: "Cumilla", value: "Cumilla" },
  { label: "Bagerhat", value: "Bagerhat" },
  { label: "Bandarban", value: "Bandarban" },
  { label: "Barguna", value: "Barguna" },
  { label: "Bhola", value: "Bhola" },
  { label: "Bogura", value: "Bogura" },
  { label: "Brahmanbaria", value: "Brahmanbaria" },
  { label: "Chandpur", value: "Chandpur" },
  { label: "Chapainawabganj", value: "Chapainawabganj" },
  { label: "Chuadanga", value: "Chuadanga" },
  { label: "Cox's Bazar", value: "Cox's Bazar" },
  { label: "Dinajpur", value: "Dinajpur" },
  { label: "Faridpur", value: "Faridpur" },
  { label: "Feni", value: "Feni" },
  { label: "Gaibandha", value: "Gaibandha" },
  { label: "Gazipur", value: "Gazipur" },
  { label: "Gopalganj", value: "Gopalganj" },
  { label: "Habiganj", value: "Habiganj" },
  { label: "Jamalpur", value: "Jamalpur" },
  { label: "Jashore", value: "Jashore" },
  { label: "Jhalokathi", value: "Jhalokathi" },
  { label: "Jhenaidah", value: "Jhenaidah" },
  { label: "Joypurhat", value: "Joypurhat" },
  { label: "Khagrachari", value: "Khagrachari" },
  { label: "Kishoreganj", value: "Kishoreganj" },
  { label: "Kurigram", value: "Kurigram" },
  { label: "Kushtia", value: "Kushtia" },
  { label: "Lakshmipur", value: "Lakshmipur" },
  { label: "Lalmonirhat", value: "Lalmonirhat" },
  { label: "Madaripur", value: "Madaripur" },
  { label: "Magura", value: "Magura" },
  { label: "Manikganj", value: "Manikganj" },
  { label: "Meherpur", value: "Meherpur" },
  { label: "Moulvibazar", value: "Moulvibazar" },
  { label: "Munshiganj", value: "Munshiganj" },
  { label: "Mymensingh", value: "Mymensingh" },
  { label: "Naogaon", value: "Naogaon" },
  { label: "Narayanganj", value: "Narayanganj" },
  { label: "Narsingdi", value: "Narsingdi" },
  { label: "Natore", value: "Natore" },
  { label: "Netrokona", value: "Netrokona" },
  { label: "Nilphamari", value: "Nilphamari" },
  { label: "Noakhali", value: "Noakhali" },
  { label: "Pabna", value: "Pabna" },
  { label: "Panchagarh", value: "Panchagarh" },
  { label: "Patuakhali", value: "Patuakhali" },
  { label: "Pirojpur", value: "Pirojpur" },
  { label: "Rajbari", value: "Rajbari" },
  { label: "Rangamati", value: "Rangamati" },
  { label: "Rangpur", value: "Rangpur" },
  { label: "Satkhira", value: "Satkhira" },
  { label: "Shariatpur", value: "Shariatpur" },
  { label: "Sherpur", value: "Sherpur" },
  { label: "Sirajganj", value: "Sirajganj" },
  { label: "Sunamganj", value: "Sunamganj" },
  { label: "Sylhet", value: "Sylhet" },
  { label: "Tangail", value: "Tangail" },
  { label: "Thakurgaon", value: "Thakurgaon" },
] as { label: string; value: string | undefined }[];

export const SearchDonorType = [
  { label: "All", value: undefined },
  { label: "Eligible", value: true },
] as { label: string; value: boolean | undefined }[];
