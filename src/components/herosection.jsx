import React from "react";
import AwsLogo from "../assets/AWS_logo_RGB_WHT.png";
import AwsAnimation from "../Animations/awsAnimation";

const Herosection = () => {
  return (
    <div className="flex  HeroSectionParent  flex-col  ">
      <img src={AwsLogo} className="w-16 mt-4 ml-4"></img>

      {/* animation */}
      <div className="w-full flex justify-center">
        <div id="AnimationDiv">
          <AwsAnimation />
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col justify-center  items-center space-y-5">
        <h1 className="text-5xl  textshadow  font-bold  text-white ">
          Welcome To AWS Student Community Day Indore
        </h1>
        <h3 className="text-1xl  font-bold  text-white textshadow ">
          {" "}
          Organized by AWS Cloud Club, IIPS DAVV
        </h3>
        <p className="text-2xl  font-bold  text-white textshadow ">
          {" "}
          27th September 2024, DAVV Auditorium  Indore
        </p>
      </div>

      {/* register button  */}
      <div className="flex justify-center mt-6 items-center ">
        <button className="button mt-2 mb-7">
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
