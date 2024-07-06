import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import "./Team.css";
function TeamCard(props) {
  return (
    <figure class="flex flex-col md:flex-row bg-slate-100 rounded-xl px-0 py-8 md:p-0 w-[300px] md:w-[420px] h-[480px] md:h-[300px]">
      <img
        src={props.image}
        className="m-auto w-[90%] md:w-[60%] h-full captianImg p-2 rounded-2xl"
      />

      <div className="flex ">
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
