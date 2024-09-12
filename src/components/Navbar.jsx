import React, { useEffect, useState } from "react";
import AWSImage from "../assets/logos/navbarlogo2.png";
import { FaMicrophone } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
//drawer
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHome } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";

const drawerWidth = 240;

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

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const checkActivePage = () => {
    document.querySelectorAll(".navbar a").forEach((activePage) => {
      if (activePage.getAttribute("name") === hash) {
        activePage.classList.add("active");
      } else {
        activePage.classList.remove("active");
      }
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset value in pixels
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setHash(id);
    }
  };

  useEffect(() => {
    checkActivePage();
  }, [hash]);

  return (
    <div>
      <div className="navbar py-3 fixed top-0 left-0 right-0 z-10 hidden md:block ">
        <div className="w-full flex justify-between items-center">
          <img
            className="h-[80px] w-[200px] pl-3"
            src={AWSImage}
            alt="AWS Community Day  Logo"
          />

          <div className="lg:w-[45%] md:w-[60%] flex justify-around mt-2 font-bold cursor-pointer text-white">
            <a
              onClick={() => {
                scrollToSection("Home");
                setHash("Home");
              }}
              name="Home"
            >
              Home
            </a>
            <a
              onClick={() => {
                scrollToSection("About");
                setHash("About");
              }}
              name="About"
            >
              About
            </a>
            <a
              onClick={() => {
                scrollToSection(" Speakers");
                setHash(" Speakers");
              }}
              name=" Speakers"
            >
              Speakers
            </a>
            <a
              onClick={() => {
                scrollToSection("Sponsers");
                setHash("Sponsers");
              }}
              name="Sponsers"
            >
              Sponsors
            </a>
            <a
              onClick={() => {
                scrollToSection("Team");
                setHash("Team");
              }}
              name="Team"
            >
              Team
            </a>{" "}
            <a
              onClick={() => {
                scrollToSection("Venue");
                setHash("Venue");
              }}
              name="Venue"
            >
              Venue
            </a>
          </div>
        </div>
      </div>
      <Box className="flex md:hidden">
        <CssBaseline />
        <AppBar
          
          className="py-2"
          open={open}
          style={{
            backgroundColor: "#401f71",
            backdropFilter: "blur(10px)",
          }}
        >
          <Toolbar className="flex justify-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <img
              className="h-[80px] w-[200px] pl-3"
              src={AWSImage}
              alt="AWS Community Day  Logo"
            />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className="flex flex-col gap-y-3">
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("Home");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaHome />
                </ListItemIcon>
                <ListItemText primary={"Home"}></ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleDrawerClose();
                  scrollToSection("About");
                }}
              >
                <ListItemIcon>
                  <IoBarChart />
                </ListItemIcon>
                <ListItemText primary={"About"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("Speakers");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaMicrophone />
                </ListItemIcon>
                <ListItemText primary={"Speakers"}></ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("Sponsers");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaHandshake />
                </ListItemIcon>
                <ListItemText primary={"Sponsers"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("Team");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <RiTeamFill />
                </ListItemIcon>
                <ListItemText primary={"Team"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("Venue");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <IoLocationSharp />
                </ListItemIcon>
                <ListItemText primary={"Venue"}></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </div>
    //small screen navbar
  );
};

export default Header;
