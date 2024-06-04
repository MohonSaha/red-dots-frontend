"use client";
import ControlledForm from "@/components/Forms/ControlledForm";
import ControlledInput from "@/components/Forms/ControlledInput";
import ControlledSelectField from "@/components/Forms/ControlledSelectField";
import MyModal from "@/components/shared/Modal/MyModal";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { ActiveStatusOption, UserRoleOption } from "@/types";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid } from "@mui/material";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
};

const EditUserModal = ({ open, setOpen, userId }: TProps) => {
  const [updateUser] = useUpdateUserMutation();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values: FieldValues) => {
    setLoading(true);
    const updateUserInfo = {
      role: values?.role,
      activeStatus: values?.status,
    };

    try {
      const res = await updateUser({
        id: userId,
        body: updateUserInfo,
      }).unwrap();

      if (res?.id) {
        toast.success("User data updated successfully!");
        setLoading(false);
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <MyModal open={open} setOpen={setOpen} title="Update User Info">
        <ControlledForm
          onSubmit={handleFormSubmit}
          //   resolver={zodResolver(ValidationSchema)}
          //   defaultValues={defaultValues}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={12}>
              <ControlledInput
                label="Name"
                fullWidth={true}
                name="name"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ControlledSelectField
                items={UserRoleOption}
                name="role"
                label="Role"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ControlledSelectField
                items={ActiveStatusOption}
                name="status"
                label="Status"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          {/* <Button
            sx={{
              margin: "10px 0px",
            }}
            fullWidth={true}
            type="submit"
          ></Button> */}

          <LoadingButton
            size="small"
            type="submit"
            loading={loading}
            variant="contained"
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

export default EditUserModal;
