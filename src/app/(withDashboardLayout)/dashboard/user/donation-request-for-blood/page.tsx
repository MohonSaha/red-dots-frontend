"use client";
import { useGetMyRequestsQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditStatusModal from "./components/EditStatusModal";

const MyDonationRequestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string>("");
  const [donateDate, setDonateDate] = useState<string>("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  const { data, isLoading } = useGetMyRequestsQuery({});

  // console.log(data);

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
      field: "action",
      headerName: "Edit Status",
      width: 100,
      // headerAlign: "center",
      // align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              color="secondary"
              aria-label=""
              sx={{ ml: 1 }}
              onClick={() => {
                setIsModalOpen(true);
                setRequestId(row?.id);
                setRequestStatus(row?.requestStatus);
                setDonateDate(row?.dateOfDonation);
              }}
            >
              <EditIcon />
            </IconButton>
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

      {/* <EditUserModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        userId={updateUserId}
      /> */}

      <EditStatusModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        requestStatus={requestStatus}
        requestId={requestId}
        donateDate={donateDate}
      />

      {!isLoading ? (
        <Box
          sx={{
            width: isExtraSmall ? "300px" : isSmallScreen ? "380px" : "100%", // Set widths for different breakpoints
            display: "flex",
            flexDirection: "column",
            overflowX: isExtraSmall || isSmallScreen ? "auto" : "hidden",
          }}
        >
          <Box sx={{}}>
            <DataGrid
              sx={{
                width: isSmallScreen ? "100%" : "100%",
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
        <Box>
          {Array.from(new Array(7)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={52}
              sx={{ mb: 2 }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MyDonationRequestPage;
