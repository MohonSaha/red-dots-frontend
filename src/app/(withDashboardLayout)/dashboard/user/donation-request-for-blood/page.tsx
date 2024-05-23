"use client";
import { useGetMyRequestsQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

const MyDonationRequestPage = () => {
  const { data, isLoading } = useGetMyRequestsQuery({});

  console.log(data);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Requester Name",
      flex: 1,
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
    // {
    //   field: "email",
    //   headerName: "Requester Eamil",
    //   flex: 1,
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box
    //         sx={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Typography>{formatBloodType(row.requester.email)}</Typography>
    //       </Box>
    //     );
    //   },
    // },
    { field: "phoneNumber", headerName: "Contact Number", flex: 1 },
    { field: "hospitalName", headerName: "Hospital Name", flex: 1 },
    { field: "hospitalAddress", headerName: "Hospital Address", flex: 1 },
    { field: "dateOfDonation", headerName: "Donation Date", flex: 1 },
    {
      field: "requestStatus",
      headerName: "Status",
      flex: 1,
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
                "PENDING"
              )}
            </Box>
          </Box>
        );
      },
    },

    {
      field: "button",
      headerName: "Details",
      flex: 1,
      headerAlign: "center",
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
              <Button variant="text" size="small">
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
      flex: 1,
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
          Blood Request To Me
        </Typography>
      </Box>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default MyDonationRequestPage;
