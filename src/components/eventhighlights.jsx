import React from "react";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { VscMicFilled } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
const Eventhighlights = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-around w-1/2 pt-20 pb-20">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="flex justify-center text-4xl font-bold text-[#401f71] leading-9">
            <CountUp end={400} duration={2} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1">
            <IoIosPeople className="text-2xl" />
            ATTENDEES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-4xl font-bold text-[#401f71] leading-9">
            <CountUp end={10} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1">
            <VscMicFilled className="text-2xl" />
            TALKS
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-4xl font-bold text-[#401f71] leading-9">
            <CountUp end={2} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1">
            <TbActivityHeartbeat className="text-2xl" />
            ACTIVITIES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-4xl font-bold text-[#401f71] leading-9">
            <CountUp end={10} duration={1} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1">
            <FaPeopleGroup className="text-2xl" /> PROFESSIONALS
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Eventhighlights;
