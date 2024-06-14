import React from "react";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { VscMicFilled } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
const Eventhighlights = () => {
  return (
    <div className="flex justify-center bg-[#ffeab25d]">
      <div className=" flex flex-col gap-y-7 justify-around w-full pt-10 pb-10 sm:w-full sm:flex-row sm:pt-20 sm:pb-20  md:w-3/4  ">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9 sm:text-3xl">
            <CountUp end={400} duration={2} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1 sm:text-lg">
            <IoIosPeople className="text-xl sm:text-xl" />
            ATTENDEES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9 sm:text-3xl">
            <CountUp end={10} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1 sm:text-lg">
            <VscMicFilled className="text-xl sm:text-xl" />
            TALKS
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9 sm:text-3xl">
            <CountUp end={2} duration={1} />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1 sm:text-lg">
            <TbActivityHeartbeat className="text-xl sm:text-xl" />
            ACTIVITIES
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          {" "}
          <p className="flex justify-center text-3xl font-bold text-[#401f71] leading-9 sm:text-3xl">
            <CountUp end={10} duration={1} suffix="+" />
          </p>{" "}
          <p className="flex justify-center text-lg font-bold items-center gap-1 sm:text-lg">
            <FaPeopleGroup className="text-xl sm:text-xl" /> PROFESSIONALS
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Eventhighlights;
