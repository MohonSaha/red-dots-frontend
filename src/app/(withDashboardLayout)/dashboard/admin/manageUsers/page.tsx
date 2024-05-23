"use client";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { formatBloodType } from "@/utils/formatBloodType";

const ManageUserPage = () => {
  const { data, isLoading } = useGetAllDonorsQuery({});
  console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      // const res = await deleteDoctor(id).unwrap();
      // if (res.id) {
      //   toast.success("Doctor deleted successfully!");
      // }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "bloodType",
      headerName: "Blood Group",
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
            <Typography>{formatBloodType(row.bloodType)}</Typography>
          </Box>
        );
      },
    },
    { field: "availability", headerName: "Availability", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            {/* <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton> */}
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
          Manage Users
        </Typography>
      </Box>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={donors}
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

export default ManageUserPage;
