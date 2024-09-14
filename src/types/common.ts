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
  { label: "A+", value: "A_POSITIVE", index: 0 },
  { label: "A-", value: "A_NEGATIVE", index: 1 },
  { label: "B+", value: "B_POSITIVE", index: 2 },
  { label: "B-", value: "B_NEGATIVE", index: 3 },
  { label: "AB+", value: "AB_POSITIVE", index: 4 },
  { label: "AB-", value: "AB_NEGATIVE", index: 5 },
  { label: "O+", value: "O_POSITIVE", index: 6 },
  { label: "O-", value: "O_NEGATIVE", index: 7 },
] as { label: string; value: string | undefined; index: number }[];

export const SearchDonorType = [
  { label: "All", value: false, index: 0 },
  { label: "Eligible", value: true, index: 1 },
] as { label: string; value: boolean | undefined; index: number }[];

export const SearchDistricts = [
  { label: "Dhaka", value: "Dhaka", index: 0 },
  { label: "Chattogram", value: "Chattogram", index: 1 },
  { label: "Barishal", value: "Barishal", index: 2 },
  { label: "Khulna", value: "Khulna", index: 3 },
  { label: "Rajshahi", value: "Rajshahi", index: 4 },
  { label: "Cumilla", value: "Cumilla", index: 5 },
  { label: "Bagerhat", value: "Bagerhat", index: 6 },
  { label: "Bandarban", value: "Bandarban", index: 7 },
  { label: "Barguna", value: "Barguna", index: 8 },
  { label: "Bhola", value: "Bhola", index: 9 },
  { label: "Bogura", value: "Bogura", index: 10 },
  { label: "Brahmanbaria", value: "Brahmanbaria", index: 11 },
  { label: "Chandpur", value: "Chandpur", index: 12 },
  { label: "Chapainawabganj", value: "Chapainawabganj", index: 13 },
  { label: "Chuadanga", value: "Chuadanga", index: 14 },
  { label: "Cox's Bazar", value: "Cox's Bazar", index: 15 },
  { label: "Dinajpur", value: "Dinajpur", index: 16 },
  { label: "Faridpur", value: "Faridpur", index: 17 },
  { label: "Feni", value: "Feni", index: 18 },
  { label: "Gaibandha", value: "Gaibandha", index: 19 },
  { label: "Gazipur", value: "Gazipur", index: 20 },
  { label: "Gopalganj", value: "Gopalganj", index: 21 },
  { label: "Habiganj", value: "Habiganj", index: 22 },
  { label: "Jamalpur", value: "Jamalpur", index: 23 },
  { label: "Jashore", value: "Jashore", index: 24 },
  { label: "Jhalokathi", value: "Jhalokathi", index: 25 },
  { label: "Jhenaidah", value: "Jhenaidah", index: 26 },
  { label: "Joypurhat", value: "Joypurhat", index: 27 },
  { label: "Khagrachari", value: "Khagrachari", index: 28 },
  { label: "Kishoreganj", value: "Kishoreganj", index: 29 },
  { label: "Kurigram", value: "Kurigram", index: 30 },
  { label: "Kushtia", value: "Kushtia", index: 31 },
  { label: "Lakshmipur", value: "Lakshmipur", index: 32 },
  { label: "Lalmonirhat", value: "Lalmonirhat", index: 33 },
  { label: "Madaripur", value: "Madaripur", index: 34 },
  { label: "Magura", value: "Magura", index: 35 },
  { label: "Manikganj", value: "Manikganj", index: 36 },
  { label: "Meherpur", value: "Meherpur", index: 37 },
  { label: "Moulvibazar", value: "Moulvibazar", index: 38 },
  { label: "Munshiganj", value: "Munshiganj", index: 39 },
  { label: "Mymensingh", value: "Mymensingh", index: 40 },
  { label: "Naogaon", value: "Naogaon", index: 41 },
  { label: "Narayanganj", value: "Narayanganj", index: 42 },
  { label: "Narsingdi", value: "Narsingdi", index: 43 },
  { label: "Natore", value: "Natore", index: 44 },
  { label: "Netrokona", value: "Netrokona", index: 45 },
  { label: "Nilphamari", value: "Nilphamari", index: 46 },
  { label: "Noakhali", value: "Noakhali", index: 47 },
  { label: "Pabna", value: "Pabna", index: 48 },
  { label: "Panchagarh", value: "Panchagarh", index: 49 },
  { label: "Patuakhali", value: "Patuakhali", index: 50 },
  { label: "Pirojpur", value: "Pirojpur", index: 51 },
  { label: "Rajbari", value: "Rajbari", index: 52 },
  { label: "Rangamati", value: "Rangamati", index: 53 },
  { label: "Rangpur", value: "Rangpur", index: 54 },
  { label: "Satkhira", value: "Satkhira", index: 55 },
  { label: "Shariatpur", value: "Shariatpur", index: 56 },
  { label: "Sherpur", value: "Sherpur", index: 57 },
  { label: "Sirajganj", value: "Sirajganj", index: 58 },
  { label: "Sunamganj", value: "Sunamganj", index: 59 },
  { label: "Sylhet", value: "Sylhet", index: 60 },
  { label: "Tangail", value: "Tangail", index: 61 },
  { label: "Thakurgaon", value: "Thakurgaon", index: 62 },
] as { label: string; value: string | undefined; index: number }[];
