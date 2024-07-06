import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import "./Team.css";
function TeamCard(props) {
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 w-[420px] figure h-[300px] cursor-pointer">
      <img
        src={props.image}
        className="m-auto w-[60%] h-full captianImg p-2 rounded-2xl"
      />

      <div className="flex ">
        <figcaption className="flex flex-col justify-center items-center gap-y-3">
          <div className="font-bold text-xl">{props.name}</div>
          <div className="text-center">{props.place}</div>
          <div className="cursor-pointer">
            <FaLinkedin className="text-2xl" />
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamCard;
