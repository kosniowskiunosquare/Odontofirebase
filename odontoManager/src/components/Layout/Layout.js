import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Box,
  Grid
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import List from "@mui/material/List";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import ListAltIcon from "@mui/icons-material/ListAlt"
import PaymentsIcon from "@mui/icons-material/Payments"
import FactCheckIcon from "@mui/icons-material/FactCheck"


import logo from "../assets/logo.png";
import LogoutButton from "../UI/LogoutButton";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#FAFAFA" }}
        position="fixed"
        open={mobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar>
          <IconButton
            style={{ color: "#BB99FF" }}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="flex-end">
            <LogoutButton>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/login"
              ></Link>
            </LogoutButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#FAFAFA",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader>
          <IconButton component={Link} to="/Dashboard" >
          <img
            src={logo}
            alt="logo"
            style={{
              marginLeft: "20px",
              height: 50,
              borderRadius: 8,
              border: "3px solid white",
            }}
          ></img>
          </IconButton>
          <IconButton onClick={handleDrawerClose} style={{ color: "#BB99FF" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
          <ListItem button key="Home" component={Link} to="/Dashboard" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button key="Calendar" component={Link} to="/Calendar" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          
          <ListItem button key="Patients" component={Link} to="/Patients" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Patients" />
          </ListItem>

          <ListItem button key="MedicalRecords" component={Link} to="/Records" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Medical Records" />
          </ListItem>
        
          <ListItem button key="Payments" component={Link} to="/Payments" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <PaymentsIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>

          <ListItem button key="Stock" component={Link} to="/Stocks" sx={[{
            '&:hover': {
              color: '#BB99FF',
              backgroundColor: '#EFE9FA'
            }
          }
          ]}>
            <ListItemIcon>
              <FactCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Stock" />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
      <footer style={{ bottom: 0, position: "fixed", width: "100%" }}>
        <Typography align="center">
          {" "}
          Unosquare ®️ {new Date().getFullYear()}
        </Typography>
      </footer>
    </Box>
  );
};

export default Layout;
