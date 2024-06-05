"use client";
import {
  useDeleteRequestMutation,
  useGetMyRequestsQuery,
} from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { useGetRequestsMadeByMeQuery } from "@/redux/api/requestApi";
import { useEffect, useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { toast } from "sonner";
import PopupModal from "@/components/shared/Modal/PopupModal";

const actionsIcon = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const MyDonationRequestPage = () => {
  const { data, isLoading } = useGetRequestsMadeByMeQuery({});
  const [allRequest, setAllRequest] = useState<any>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRowId, setSelectedRowId] = useState<null | string>(null);
  const [deleteRequest] = useDeleteRequestMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // console.log(data);

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
        email: request?.donor?.email,
      };
    });
    setAllRequest(updateData);
  }, [data]);

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    id: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleEdit = () => {
    if (selectedRowId) {
      // console.log("Edit", selectedRowId);
      handleMenuClose();
    }
  };

  const handleDelete = () => {
    if (selectedRowId) {
      handleOpenModal(selectedRowId);
    }
  };

  const handleOpenModal = (itemId: string) => {
    setItemId(itemId);
    setIsModalOpen(true);
    handleMenuClose();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemId(null);
    handleMenuClose();
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (itemId) {
        const res = await deleteRequest(itemId).unwrap();
        if (res?.count > 0) {
          toast.success("Your request deleted successfully!");
          setLoading(false);
          handleCloseModal();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", width: 30 },
    { field: "name", headerName: "Donor Name", flex: 1 },
    {
      field: "contactInfo",
      headerName: "Contact Info",
      width: 200,
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
                <Typography sx={{ color: "green" }}>{row.email}</Typography>
              ) : (
                <Typography sx={{ color: "#F7A511" }}>Not Available</Typography>
              )}
            </Box>
          </Box>
        );
      },
    },
    { field: "hospitalName", headerName: "Hospital Name", flex: 1 },
    { field: "hospitalAddress", headerName: "Hospital Address", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
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
                <Typography sx={{ color: "#F7A511" }}>PENDING</Typography>
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
      // headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          // <Box>
          //   <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
          //     <IconButton color="secondary" aria-label="" sx={{ ml: 1 }}>
          //       <EditIcon />
          //     </IconButton>
          //   </Link>
          // </Box>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <IconButton
              aria-controls={`action-menu-${row.id}`}
              aria-haspopup="true"
              onClick={(event) => handleMenuClick(event, row.id)}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id={`action-menu-${row.id}`}
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedRowId === row.id}
              onClose={handleMenuClose}
            >
              {/* <MenuItem onClick={handleEdit}>
                <EditIcon fontSize="small" /> Edit
              </MenuItem> */}
              <MenuItem onClick={handleDelete}>
                <DeleteIcon fontSize="small" /> Delete
              </MenuItem>
            </Menu>
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
      <PopupModal
        loading={loading}
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        title="Delete Request"
        message="Are you sure you want to delete the request?"
        okButton="Yes"
        cancelButtom="No"
      />

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
              rows={allRequest ?? []}
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
