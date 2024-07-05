import React, { useEffect } from "react";
import AwsLogo from "../assets/AWS_logo_RGB_WHT.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import AwsAnimation from "../Animations/awsAnimation";

const Herosection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false,
    });
  }, []);
  return (
    <div
      className="flex  purplegradient  flex-col py-5  space-y-7  mt-[96px]"
      id="Home"
    >
      <div className="w-full flex justify-center mt-2" data-aos="fade-right">
        {/* animation */}
        {/* <div id="AnimationDiv" className="mb-3">  
          <AwsAnimation />
        </div> */}

        <img src={AwsLogo} className="w-20"></img>
      </div>

      {/* text */}
      <div className="flex flex-col justify-center  items-center space-y-5">
        <h3
          className="text-3xl  textshadow  font-bold  text-white  tracking-wide delay-300"
          data-aos="fade-left"
        >
          {" "}
          STUDENT
        </h3>

        <h1
          className="text-4xl  textshadow  text-center  font-bold  text-white tracking-wide delay-500 sm:text-5xl "
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          COMMUNITY DAY
        </h1>
        <h3
          className="text-xl  text-center font-bold  text-white textshadow tracking-wide delay-700"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          Organized by AWS Cloud Clubs
        </h3>

        <p
          className=" text-xl  text-center font-bold flex flex-col gap-y-3 gap-x-3 items-center  text-white textshadow tracking-wide md:flex-row sm:text-2xl"
          data-aos-delay="900"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          <span className="flex gap-3 items-center">
            <FaCalendarDays /> 22th September 2024{" "}
          </span>{" "}
          <span className="flex gap-1 items-center  ">
            <FaLocationDot /> DAVV Auditorium Indore
          </span>{" "}
        </p>
      </div>

      {/* register button  */}
      <div
        className="flex justify-center items-center w-full "
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-easing="ease-out-cubic"
      >
        <button className="button p-2 py-3">
          <p className="button-text">Register Now</p>

          <p className="iconer">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              />
            </svg>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
