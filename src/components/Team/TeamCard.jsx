import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import "./Team.css";
function TeamCard(props) {
  return (
    <figure
      className={`flex flex-col md:flex-row bg-slate-100 rounded-xl px-0 py-8 md:p-0 w-[320px] md:w-[420px] h-[480px] md:h-[300px] teamcardwidth ${props.className}`}
    >
      <a className="md:w-[60%] p-1" href={props.linkedin}>
        <img src={props.image} className=" h-full captianImg  rounded-2xl" />
      </a>

      <div className="flex items-center justify-center md:w-[40%]">
        <figcaption className="flex flex-col justify-center items-center gap-y-3 w-[95%] text-center">
          <div className="font-bold text-xl">{props.name}</div>
          <div className="text-center">{props.place}</div>
          <a className="cursor-pointer" href={props.linkedin} target="_blank">
            <FaLinkedin className="text-2xl text-blue-700" />
          </a>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamCard;
