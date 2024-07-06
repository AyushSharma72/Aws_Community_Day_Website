import React from "react";

// import "./Team.css";
function TeamCard(props) {
  return (
    <figure class="md:flex-col bg-slate-100 rounded-xl p-8 md:p-0 w-[300px] ">
      <img
        src={props.image}
        className="m-auto w-[75%] h-[200px] captianImg p-2"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption class="font-medium">
          <div>{props.name}</div>
          <div>{props.place}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamCard;
