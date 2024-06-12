import React, { useEffect, useState } from "react";
import AWSImage from "../assets/navbarlogo2.png";

function Navbar() {
  const [hash, Sethash] = useState("Home");

  const handleNavLinkClick = () => {
    console.log(hash);
    const targetId = hash;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 110; // Adjust this value as needed
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
      });
    }
  };

  const checkActivePage = () => {
    const page = hash;
    document.querySelectorAll(".navbar li").forEach((activePage) => {
      if (activePage.id === page) {
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
            id="Home"
            onClick={() => {
              Sethash("Home");
            }}
          >
            Home
          </li>
          <li
            className=" font-bold"
            id="About"
            onClick={() => {
              Sethash("About");
            }}
          >
            About{" "}
          </li>
          <li
            className=" font-bold"
            onClick={() => {
              Sethash("Speakers");
            }}
          >
            Speakers
          </li>
          <li
            className=" font-bold"
            onClick={() => {
              Sethash("Venue");
            }}
          >
            Venue
          </li>
          <li
            className=" font-bold"
            onClick={() => {
              Sethash("Sponsers");
            }}
          >
            Sponsers
          </li>
          <li
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
