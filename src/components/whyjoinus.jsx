import React from "react";
import Sessionanimation from "../Animations/SessionAnimation";
import NetworkingAnimation from "../Animations/networking";
import SwagsAnimation from "../Animations/SwagsAnimation";
import Food from "../Animations/food";

const Whyjoinus = () => {
  return (
    <div className="flex flex-col justify-center items-center purplegradient mt-3">
      <h3 className="text-4xl textshadow text-white font-bold mt-3">
        Why Attend ?
      </h3>

      <div className="w-full flex justify-around pt-10 pb-10">
        <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2">
          <div>
            <Sessionanimation />
          </div>
          <div className="flex flex-col items-center  gap-y-2 ">
            <h2 className="text-2xl font-bold">Speaker Sessions :</h2>

            <p className="text-center text-xl font-semibold ">
              Technical Sessions covering the hottest developer topics in tech.
            </p>
          </div>
        </div>

        <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2">
          <div>
            <NetworkingAnimation />
          </div>
          <div className="flex flex-col items-center  gap-y-2 ">
            <h2 className="text-2xl font-bold">Networking:</h2>

            <p className="text-center text-xl font-semibold ">
              Networking opportunities with industry experts and intelligent
              minds!
            </p>
          </div>
        </div>

        <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2">
          <div>
            <SwagsAnimation />
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-2xl font-bold">AWS Swags:</h2>

            <p className="text-center text-xl font-semibold ">
              Collect Swag from AWS and Sponsors!
            </p>
          </div>
        </div>

        <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2">
          <div>
            <Food />
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-2xl font-bold">Free Feast:</h2>

            <p className="text-center text-xl font-semibold ">
              Team lunches and evening snacks which ignite your tastebuds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyjoinus;
