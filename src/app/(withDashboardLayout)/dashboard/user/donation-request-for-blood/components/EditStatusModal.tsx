"use client";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import MyModal from "@/components/shared/Modal/MyModal";
import { useUpdateRequestStatusMutation } from "@/redux/api/requestApi";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import {
  ActiveStatusOption,
  BloodGroups,
  DonateOption,
  RequestStatusOption,
  UserRoleOption,
} from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  requestId: string;
  requestStatus: string;
  donateDate: string;
};

const EditStatusModal = ({
  open,
  setOpen,
  requestStatus,
  requestId,
  donateDate,
}: TProps) => {
  const [loading, setLoading] = useState(false);
  const [updateRequestStatus] = useUpdateRequestStatusMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    setLoading(true);
    const updatedInfo = {
      requestStatus: values?.status,
    };

    try {
      const res = await updateRequestStatus({
        id: requestId,
        body: updatedInfo,
      }).unwrap();
      console.log(res);

      if (res?.id) {
        toast.success("Request updated successfully!");
        setLoading(false);
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <MyModal open={open} setOpen={setOpen} title="Update Request Status">
        <ControlledForm
          onSubmit={handleFormSubmit}
          //   resolver={zodResolver(ValidationSchema)}
          //   defaultValues={defaultValues}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledInput
                label={`Donate Date: ${donateDate}`}
                fullWidth={true}
                name="dateOfDonation"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledSelectField
                items={RequestStatusOption}
                name="status"
                label="Status"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <LoadingButton
            size="small"
            type="submit"
            loading={loading}
            variant="contained"
            fullWidth={true}
            sx={{
              margin: "10px 0px",
            }}
          >
            <span>Update</span>
          </LoadingButton>
        </ControlledForm>
      </MyModal>
    </div>
  );
};

export default EditStatusModal;
