import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Paper, Typography, Avatar, Stack } from "@mui/material";
import Layout from "../Layout/Layout";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <>
      <Layout />
      <div style={{ height: 100 }}></div>
      <div>
        <Paper
          sx={{
            position: "relative",
            display: "flex",
            p: 3,
            margin: "auto",
            maxWidth: 900,
            height: 500,
            flexGrow: 2,
            borderRadius: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Stack direction="row" spacing={2}>
                    <Typography
                      style={{ flexGrow: 1 }}
                      variant="h3"
                      component="div"
                    >
                      Welcome
                    </Typography>
                    <Typography variant="body3">
                      <h3>{user.name}</h3>
                    </Typography>
                    <Avatar src={user.picture} alt={user.name} />
                  </Stack>
                  <Typography variant="body3" gutterBottom>
                    <p>{user.email}</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Profile;
