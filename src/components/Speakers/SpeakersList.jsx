import React from "react";
import SpeakerCard from "./SpeakerCard";
import stephen from "../../assets/Speakers/stephen.png";
import ramneek from "../../assets/Speakers/ramneek.png";
import surabhi from "../../assets/Speakers/surabhi.png";
import chirag from "../../assets/Speakers/chirag.png";

function SpeakersList() {
  return (
    <div id="Speakers">
      <h1 className=" font-[Poppins, sans-serif] leading-10 text-3xl font-bold text-center mt-4 mb-4 Blackheadingshadow">
        SPEAKERS
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="flex md:flex-row flex-wrap gap-10 md:gap-20 justify-center items-center ">
          <SpeakerCard
            heading="Stephen Howell"
            about="Academic Developer Advocate AWS"
            image={stephen}
            linkedin="https://www.linkedin.com/in/stephenrichardhowell/"
          />
          <SpeakerCard
            heading="Ramneek Kalra"
            about="Cloud Support Engineer AWS"
            image={ramneek}
            linkedin="https://www.linkedin.com/in/ramneekkalra/"
          />
          <SpeakerCard
            heading="Surabhi Jain"
            about="Cloud Support Engineer - Linux AWS"
            image={surabhi}
            linkedin="https://www.linkedin.com/in/surabhijainabd/"
          />
          <SpeakerCard
            heading="Chirag Oswal"
            about="Technical Account Manager AWS"
            image={chirag}
            linkedin="https://www.linkedin.com/in/chiragoswal/"
          />
        </div>
      </div>
    </div>
  );
}

export default SpeakersList;
