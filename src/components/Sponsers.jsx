import React from "react";
import { BsRocketFill } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
const Sponsers = () => {
  return (
    <div id="Sponsers" className="pt-8 flex flex-col items-center gap-y-3 ">
      <h2 className="leading-10 text-3xl font-bold text-center  Blackheadingshadow">
        Call For Sponsers
      </h2>
      <p className=" text-xl font-bold text-center  ">
        Intrested in sponsorship ?
      </p>
      <p className=" text-md font-bold text-center  ">
        Contact us at{" "}
        <a
          href="mailto:ascdindore@gmail.com"
          target="blank"
          className="text-blue-500"
        >
          ascdindore@gmail.com
        </a>{" "}
        or{" "}
        <a
          href="mailto:awscc.iips@gmail.com"
          target="blank"
          className="text-blue-500"
        >
          awscc.iips@gmail.com
        </a>
      </p>

      <div className="flex flex-col w-full gap-y-3 py-3 purplegradient pb-8 ">
        <h3 className="text-2xl textshadow text-white font-bold mt-3 text-center">
          Why Sponser Us ?
        </h3>
        <div className="flex justify-around mt-2 flex-wrap gap-x-3 px-2 gap-y-4">
          {/* card 1 */}
          <div className="bg-white flex flex-col w-[290px] sponserCardShadow p-3 rounded-lg cursor-pointer  items-center  hover:-translate-y-2 duration-300">
            <BsRocketFill className="text-3xl " />
            <p className="font-bold  mt-3 text-center">
              Boost brand visibility and recognition:
            </p>
            <p className="font-medium text-center ">
              Companies can enhance their brand visibility and recognition among
              a targeted audience of tech enthusiasts, developers, and industry
              professionals.
            </p>
          </div>
          {/* card 2 */}

          <div className="bg-white flex flex-col w-[290px] sponserCardShadow p-3 rounded-lg cursor-pointer   items-center hover:-translate-y-2 duration-300">
            <HiOutlineSpeakerphone className="text-3xl " />
            <p className="font-bold  mt-3  text-center">
              Special shoutouts during the event:
            </p>
            <p className="font-medium text-center">
              Your brand will be prominently acknowledged and celebrated
              throughout the event, showcasing your commitment to Join us in
              spotlighting your support !
            </p>
          </div>
          {/* card 3 */}

          <div className="bg-white flex flex-col w-[290px] sponserCardShadow p-3 rounded-lg cursor-pointer  items-center hover:-translate-y-2 duration-300">
            <MdGroups className="text-3xl " />
            <p className="font-bold  mt-3 text-center">
              Targeted Audience Engagement:
            </p>
            <p className="font-medium text-center">
              Benefit from direct interaction opportunities and heightened
              visibility among target audience throughout the event.
            </p>
          </div>
          {/* card 4 */}

          <div className="bg-white flex flex-col w-[290px] sponserCardShadow p-3 rounded-lg cursor-pointer  items-center hover:-translate-y-2 duration-300">
            <FaHandshake className="text-3xl " />
            <p className="font-bold  mt-3 text-center">
              Access to Exclusive Networking Opportunities:
            </p>
            <p className="font-medium text-center">
              Gain access to key decision-makers and experts in the AWS
              ecosystem. Forge meaningful connections with industry leaders and
              AWS professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
