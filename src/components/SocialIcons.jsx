import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="fixed top-[40%] right-[0%]">
      <div className="flex flex-col gap-2 bg-white p-1 rounded-md">
        <a
          href="https://www.instagram.com/scdindore?igsh=MXVkcm5kNG9yYXVpZw=="
          target="blank"
        >
          {" "}
          <FaSquareInstagram className="text-pink-600 text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/aws-student-community-day-indore/posts/?feedView=all"
          target="blank"
        >
          {" "}
          <FaLinkedin className="text-blue-800 text-3xl" />
        </a>
        <a
          href="https://x.com/aws_studen78471?t=PNZ5vQhCZTdd-maCCju6PQ&s=09"
          target="blank"
        >
          {" "}
          <FaTwitterSquare className="text-blue-600  text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
