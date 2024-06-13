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
      className="flex  purplegradient  flex-col p-2  space-y-7  mt-[96px]"
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
          className=" text-xl  text-center font-bold flex flex-col gap-y-3 items-center  text-white textshadow tracking-wide md:flex-row sm:text-2xl"
          data-aos-delay="900"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          <span className="flex gap-3 items-center">
            <FaCalendarDays /> 27th September 2024,{" "}
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
        <button className="button mt-4 mb-9 w-[160px] md:w-[160px] sm:w-[160px] lg:w-[160px] xl:w-[160px]  2xl:w-[160px]">
          Register Now
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
