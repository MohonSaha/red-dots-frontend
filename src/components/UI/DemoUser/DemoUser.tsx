import React, { useState } from "react";
import "./DemoUser.css";
import LoadingButton from "@mui/lab/LoadingButton";

const DemoUser = () => {
  const [active, setActive] = useState<"user" | "admin" | null>(null);
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(!loading); // Reset loading state
  }, 2000);

  const handleClick = (type: "user" | "admin") => {
    setActive(type);
  };

  return (
    <div>
      <div className={`demoUserWrapper ${active ? "expanded" : ""}`}>
        <div className="demoUser">
          <div
            className={`demoBtn ${active === "user" ? "active" : ""}`}
            onClick={() => handleClick("user")}
          >
            <LoadingButton
              size="small"
              //   type="submit"
              loading={loading}
              variant="contained"
              fullWidth={true}
            >
              <span>{active === "user" ? "Welcome to User" : "Demo User"}</span>
            </LoadingButton>
          </div>
          <h3 className="demoText">{active ? "" : "Use Demo Account"}</h3>
          <div
            className={`demoBtn ${active === "admin" ? "active" : ""}`}
            onClick={() => handleClick("admin")}
          >
            <LoadingButton
              size="small"
              //   type="submit"
              loading={loading}
              variant="contained"
              fullWidth={true}
            >
              {active === "admin" ? "Welcome to Admin" : "Demo Admin"}
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoUser;
