import React, { useEffect, useState } from "react";
import AWSImage from "../assets/navbarlogo2.png";

function Navbar() {
  const [hash, Sethash] = useState("Home");

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

  return (
    <div className="p-2  w-full navbar fixed top-0 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          className="h-[80px] w-[200px] pl-3 mb-4 md:mb-0"
          src={AWSImage}
          alt="AWS Community Day  Logo"
        />

        <div className="text-white flex flex-col md:flex-row items-center gap-4 md:gap-10 font-semibold pr-10 ">
          <li
            className=" font-bold"
            name="Home"
            onClick={() => {
              Sethash("Home");
            }}
          >
            Home
          </li>
          <li
            className=" font-bold"
            name="About"
            onClick={(e) => {
              Sethash("About");
            }}
          >
            About{" "}
          </li>
          <li
            name="Speakers"
            className="font-bold"
            onClick={() => {
              Sethash("Speakers");
            }}
          >
            Speakers
          </li>
          <li
            name="Venue"
            className=" font-bold"
            onClick={() => {
              Sethash("Venue");
            }}
          >
            Venue
          </li>
          <li
            name="Sponsers"
            className=" font-bold"
            onClick={() => {
              Sethash("Sponsers");
            }}
          >
            Sponsers
          </li>
          <li
            name="Team"
            className=" font-bold"
            onClick={() => {
              Sethash("Team");
            }}
          >
            Team
          </li>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
