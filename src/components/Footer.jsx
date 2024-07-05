import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#401f71] py-5 flex flex-col gap-y-2">
      <div className="text-2xl  text-center font-bold  text-white textshadow tracking-wide ">
        Follow us on
      </div>
      <div className="flex justify-center gap-x-3">
        <a
          href="https://www.instagram.com/aws_cloudclub_iips?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blank"
        >
          {" "}
          <FaSquareInstagram className="text-white text-2xl" />
        </a>

        <a href="https://www.linkedin.com/groups/9351190/" target="blank">
          {" "}
          <FaLinkedin className="text-white text-2xl" />
        </a>
        <a href="https://x.com/home" target="blank">
          {" "}
          <FaTwitterSquare className="text-white text-2xl" />
        </a>
      </div>
      <div>
        <p className="text-lg  text-center font-bold  text-white textshadow tracking-wide ">
          Designed And Developed By{" "}
          <a
            href="www.linkedin.com/in/ayush-sharma-a155a8267"
            target="blank"
            className="text-blue-500"
          >
            Ayush Sharma
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/diksha-gupta3094/"
            target="blank"
            className="text-blue-500"
          >
            Diksha Gupta
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
