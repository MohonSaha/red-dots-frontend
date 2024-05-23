"use client";
import { useGetMyRequestsQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { useGetRequestsMadeByMeQuery } from "@/redux/api/requestApi";
import { useEffect, useState } from "react";

const MyDonationRequestPage = () => {
  const { data, isLoading } = useGetRequestsMadeByMeQuery({});
  const [allRequest, setAllRequest] = useState<any>([]);

  console.log(data);

  useEffect(() => {
    const updateData = data?.map((request: any, index: number) => {
      return {
        sl: index + 1,
        id: request?.id,
        hospitalName: request?.hospitalName,
        hospitalAddress: request?.hospitalAddress,
        reason: request?.reason,
        requestStatus: request?.requestStatus,
        name: request?.donor?.name,
      };
    });
    setAllRequest(updateData);
  }, [data]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    // {
    //   field: "name",
    //   headerName: "Donor Name",
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
    //         <Typography>{formatBloodType(row.donor.name)}</Typography>
    //       </Box>
    //     );
    //   },
    // },
    { field: "name", headerName: "Donor Name", flex: 1 },
    { field: "hospitalName", headerName: "Hospital Name", flex: 1 },
    { field: "hospitalAddress", headerName: "Hospital Address", flex: 1 },
    { field: "reason", headerName: "Reason For Blood", flex: 1 },
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
      flex: 1,
      // headerAlign: "center",
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
          Blood Requests Made By Me
        </Typography>
      </Box>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={allRequest ?? []}
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
