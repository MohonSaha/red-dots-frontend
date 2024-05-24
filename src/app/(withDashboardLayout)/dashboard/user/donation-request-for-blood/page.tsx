"use client";
import { useGetMyRequestsQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

const MyDonationRequestPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useGetMyRequestsQuery({});

  console.log(data);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Requester Name",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>{formatBloodType(row.requester.name)}</Typography>
          </Box>
        );
      },
    },
    { field: "phoneNumber", headerName: "Requester Number", width: 150 },
    { field: "hospitalName", headerName: "Hospital Name", width: 150 },
    { field: "hospitalAddress", headerName: "Hospital Address", width: 150 },
    { field: "dateOfDonation", headerName: "Donation Date", width: 150 },
    {
      field: "requestStatus",
      headerName: "Status",
      width: 120,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              {row?.requestStatus === "APPROVED" ? (
                <Typography sx={{ color: "green" }}>APPROVED</Typography>
              ) : (
                <Typography sx={{ color: "orange" }}>PENDING</Typography>
              )}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "button",
      headerName: "Details",
      width: 100,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              href={`/dashboard/user/donation-request-for-blood/details/${row.id}`}
            >
              <Button variant="text" size="small" sx={{ p: 0 }}>
                Details
              </Button>
            </Link>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton color="secondary" aria-label="" sx={{ ml: 1 }}>
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          Blood Requests Received By Me
        </Typography>
      </Box>

      {!isLoading ? (
        <Box
          sx={{
            width: isSmallScreen ? "380px" : "100%",
            display: "flex",
            flexDirection: "column",
            overflowX: isSmallScreen ? "auto" : "hidden",
          }}
        >
          <Box sx={{ minWidth: isSmallScreen ? "380px" : "100%" }}>
            <DataGrid
              sx={{
                width: "100%",
              }}
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 8 },
                },
              }}
              pageSizeOptions={[5, 10]}
              autoHeight
            />
          </Box>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default MyDonationRequestPage;
