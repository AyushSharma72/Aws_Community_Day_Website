import React, { useEffect, useState } from "react";
import AWSImage from "../assets/navbarlogo2.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [hash, Sethash] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavLinkClick = () => {
    const targetId = hash;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 90;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const checkActivePage = () => {
    document.querySelectorAll(".navbar li").forEach((activePage) => {
      if (activePage.getAttribute("name") === hash) {
        activePage.classList.add("active");
      } else {
        activePage.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    checkActivePage();
    handleNavLinkClick();
  }, [hash]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="w-[300px]"
    >
      <div className="flex justify-end p-4">
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <List className="flex flex-col gap-5">
        {["Home", "About", "Speakers", "Sponsers", "Team", "Venue"].map(
          (text) => (
            <ListItem key={text} onClick={() => Sethash(text)}>
              <ListItemText
                primary={<span className="font-bold">{text}</span>}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className="w-full navbar fixed top-0 z-10">
      <AppBar position="static" className="p-2 navbarcolor">
        <Toolbar className="flex justify-between ">
          <img
            className="h-[80px] w-[200px] pl-3"
            src={AWSImage}
            alt="AWS Community Day  Logo"
          />

          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <ul className="text-white flex gap-8 font-semibold list-none ">
              {["Home", "About", "Speakers", "Sponsers", "Team", "Venue"].map(
                (text) => (
                  <li
                    key={text}
                    className="font-bold cursor-pointer"
                    name={text}
                    onClick={() => Sethash(text)}
                  >
                    {text}
                  </li>
                )
              )}
            </ul>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
}

export default Navbar;
