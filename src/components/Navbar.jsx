import React, { useEffect } from "react";
import AWSImage from "../assets/navbarlogo.png";
function Navbar() {
  useEffect(() => {
    const checkActivePage = () => {
      if (window.location.hash === "") {
        return;
      }
      const page = window.location.hash;
      document.querySelectorAll(".navbar a").forEach((activePage) => {
        if (activePage.href.includes(page)) {
          activePage.classList.add("active");
        } else {
          activePage.classList.remove("active");
        }
      });
    };

    window.addEventListener("hashchange", checkActivePage);

    checkActivePage();
    return () => {
      window.removeEventListener("hashchange", checkActivePage);
    };
  }, []);

  return (
    <div className="bg-[#7C5AED] p-2  w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          className="h-[100px] w-[230px] pl-3 mb-4 md:mb-0"
          src={AWSImage}
          alt="AWS Community Day  Logo"
        />

        <div className="text-white flex flex-col md:flex-row items-center gap-4 md:gap-10 font-semibold pr-10 navbar">
          <a href="#Home" className="text-lg">
            Home
          </a>
          <a href="#About" className="text-lg">
            About{" "}
          </a>
          <a href="#Speakers" className="text-lg">
            Speakers
          </a>
          <a href="#Venue" className="text-lg">
            Venue
          </a>
          <a href="#Sponsers" className="text-lg">
            Sponsers
          </a>
          <a href="#Team" className="text-lg">
            Team
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
