import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Envision", path: "/Envision" },
    { label: "Plan", path: "/Plan" },
    { label: "My Tribes", path: "/Tribes" },
    { label: "Sign Up", path: "/signup" }, // change to buddy
  ];

  const toggleDrawer = () => setOpen(!open);

  const drawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            onClick={toggleDrawer}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#D9D9D9" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "center" },
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            Travel Buddy
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "gray" : "black",
                  borderBottom:
                    location.pathname === item.path
                      ? "2px solid black"
                      : "none",
                  margin: "0 20px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {drawerList}
      </Drawer>
    </>
  );
}
