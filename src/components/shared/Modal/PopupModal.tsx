import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

interface PopupModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  message: string;
  okButton: string;
  cancelButtom: string;
  loading: boolean;
}

const PopupModal: React.FC<PopupModalProps> = ({
  open,
  handleClose,
  handleConfirm,
  message,
  title,
  okButton,
  cancelButtom,
  loading,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: 20 }}>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          {cancelButtom}
        </Button>
        {/* <Button onClick={handleConfirm} color="primary" autoFocus>
          {okButton}
        </Button> */}

        <LoadingButton
          onClick={handleConfirm}
          size="small"
          loading={loading}
          variant="contained"
          sx={{
            margin: "10px 0px",
          }}
        >
          <span>{okButton}</span>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default PopupModal;
