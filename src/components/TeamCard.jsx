import React from "react";

// import "./Team.css";
function TeamCard(props) {
  return (
    <figure class="md:flex-col bg-slate-100 rounded-xl p-8 md:p-0 ">
      <img src={props.image} className="w-3/4 h-[230px]" />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{props.name}</div>
          <div class="text-slate-700 dark:text-slate-500">{props.place}</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default TeamCard;
