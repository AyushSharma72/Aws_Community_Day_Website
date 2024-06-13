import React from "react";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { VscMicFilled } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
const Eventhighlights = () => {
  return (
    <div className="flex justify-center bg-[#ffeab25d]">
      <div className=" flex justify-around w-full pt-20 pb-20 sm:w-full md:w-3/4  ">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9">
            <CountUp end={400} duration={2} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-md font-bold items-center gap-1">
            <IoIosPeople className="text-xl" />
            ATTENDEES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9">
            <CountUp end={10} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-md font-bold items-center gap-1">
            <VscMicFilled className="text-xl" />
            TALKS
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9">
            <CountUp end={2} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-md font-bold items-center gap-1">
            <TbActivityHeartbeat className="text-xl" />
            ACTIVITIES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9">
            <CountUp end={10} duration={1} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-md font-bold items-center gap-1">
            <FaPeopleGroup className="text-xl" /> PROFESSIONALS
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Eventhighlights;
