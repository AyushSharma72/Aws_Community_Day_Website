import React from "react";
import TeamCard from "./TeamCard";
import ContributorList from "./ContributorList";

function Team() {
  return (
    <div className="flex items-center justify-center flex-col mt-9" id="Team">
      <h1 className="text-3xl font-bold mt-6 mb-6 Blackheadingshadow">
        ORGANISERS
      </h1>
      <div className="flex flex-col md:flex-row justify-center  items-center flex-wrap gap-20">
        <TeamCard
          name="Rashi Dashore"
          place="DAVV Indore"
          linkedin="#"
          image="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
        />
        <TeamCard
          name="ABC"
          place="XYZ"
          linkedin="#"
          image="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"
        />
        <TeamCard
          name="PQR"
          place="XYZ"
          linkedin="#"
          image="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg"
        />
      </div>

   <ContributorList/>
    </div>
  );
}

export default Team;
