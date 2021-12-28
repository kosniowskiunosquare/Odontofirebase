import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";


const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <div>
        <h3 style={{ display: "inherit" }}>
          {/* User is {isAuthenticated ? "logged in" : "not logged in "}
          Bienvenido {JSON.stringify(user.name)} &nbsp; */}
          <Button
            style={{ borderRadius: 50, backgroundColor: "#8C51FF" }}
            color="primary"
            variant="contained"
            onClick={logout}
          >
            logout
          </Button>
        </h3>

        {/* {isAuthenticated && (
          <pre style={{ textAlign: "start" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        )} */}
      </div>

      {/* <h2>Bienvenido {JSON.stringify(user.name)}</h2> */}
    </>
  );
};

export default LogoutButton;
