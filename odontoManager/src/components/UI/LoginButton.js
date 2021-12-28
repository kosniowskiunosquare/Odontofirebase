import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          display="block"
          color="secondary"
          variant="contained"
          onClick={loginWithRedirect}
          style={{ borderRadius: 50, backgroundColor: "#1FBDC8" }}
        >
          login or register
        </Button>
      </div>
    </>
  );
};
export default LoginButton;
