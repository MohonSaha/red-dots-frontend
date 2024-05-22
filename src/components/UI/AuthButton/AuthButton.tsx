import AccountMenu from "@/components/shared/AccountMenu/AccountMenu";
import { getUserInfo, removeUser } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { grey } from "@mui/material/colors";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo?.email ? (
        <AccountMenu color="white" />
      ) : (
        <Button
          component={Link}
          href="/login"
          sx={{
            backgroundColor: "white",
            color: "red",
            "&:hover": {
              backgroundColor: grey[300],
            },
          }}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
