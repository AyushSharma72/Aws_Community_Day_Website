import React from "react";
import TeamCard from "./TeamCard";
// import ContributorList from "./ContributorList";
import Akash from "../../assets/Captian/Akash.jpg";
import Rashi from "../../assets/Captian/RashiDashore.jpg";
import Shivendra from "../../assets/Captian/Shivendra.jpg";

function TeamList() {
  return (
    <div className="flex items-center justify-center flex-col py-9" id="Team">
      <h1 className="text-3xl font-bold mt-6 mb-6 Blackheadingshadow">
        ORGANISERS
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-y-10 items-center flex-wrap md:gap-20 ">
        <TeamCard
          name="Shivendra Pratap"
          place="AWS Cloud Captain Medi-caps University Indore"
          linkedin="https://www.linkedin.com/in/shivendra-pratap-singh-patel-0967a1224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          image={Shivendra}
          className="order-1 md:order-0"
        />
        <TeamCard
          name="Rashi Dashore"
          place="AWS Cloud Captain Devi Ahilya University Indore "
          linkedin="https://www.linkedin.com/in/rashi-dashore-27b14b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          image={Rashi}
          className="order-0 md:order-1"
        />
        <TeamCard
          name="Akash Kharabe"
          place="AWS Cloud Captain VIT Bhopal"
          linkedin="https://www.linkedin.com/in/aakash-kharabe-1574bb220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          image={Akash}
          className="order-2 md:order-2"
        />
      </div>
      {/* <ContributorList/> */}
    </div>
  );
}

export default TeamList;
