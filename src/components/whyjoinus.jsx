import React, { useEffect } from "react";
import AOS from "aos";
import Sessionanimation from "../Animations/SessionAnimation";
import NetworkingAnimation from "../Animations/networking";
import SwagsAnimation from "../Animations/SwagsAnimation";
import Food from "../Animations/food";

const Whyjoinus = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,

      duration: 600,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center purplegradient mt-3">
      <h3 className="text-4xl textshadow text-white font-bold mt-3">
        Why Attend ?
      </h3>

      <div className="w-full flex flex-col  flex-wrap items-center justify-around pt-10 pb-10  gap-y-4 md:gap-8 sm:gap-4 sm:flex-row">
        <div data-aos="fade-zoom-in">
          <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2 cardshadow h-[300px]">
            <div>
              <Sessionanimation />
            </div>
            <div className="flex flex-col items-center   ">
              <h2 className="text-2xl font-bold" title="🤓">
                Speaker Sessions :
              </h2>

              <p className="text-center text-lg font-semibold " title="🤓">
                Technical & Non Technical Sessions covering the hottest
                developer topics.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-zoom-in">
          <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2 cardshadow  h-[300px]">
            <div>
              <NetworkingAnimation />
            </div>
            <div className="flex flex-col items-center  gap-y-2 ">
              <h2 className="text-2xl font-bold" title="🤝">
                Networking:
              </h2>

              <p className="text-center text-lg font-semibold " title="🤝">
                Networking opportunities with industry experts and intelligent
                minds!
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-zoom-in">
          {" "}
          <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2 cardshadow  h-[300px]">
            <div>
              <SwagsAnimation />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-2xl font-bold" title="😎">
                AWS Swags:
              </h2>

              <p className="text-center text-lg font-semibold " title="😎">
                Collect Swag from AWS and Sponsors!
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-zoom-in">
          <div className="flex flex-col  items-center bg-white w-64 rounded-lg p-2 cardshadow  h-[300px]">
            <div>
              <Food />
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <h2 className="text-2xl font-bold" title="😋">
                Free Feast:
              </h2>

              <p className="text-center text-lg font-semibold " title="😋">
                Team lunches and evening snacks which ignite your tastebuds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyjoinus;
