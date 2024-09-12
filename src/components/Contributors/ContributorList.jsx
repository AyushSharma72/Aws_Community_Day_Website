import React from "react";
import ContributorCard from "./ContributorCard";
import Anshul from '../../assets/Volunteer/Anshul.jpg'
import Ambika from '../assest/Volunteer/Ambika.jpg'
let CoreTeamMember = [
  {
    id:'1',
    name:'Ambika',
    linkedin:'https://www.linkedin.com/in/ambika-choudhary-619964277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:Ambika
  }
]
function ContributorList() {
  return (
    <>
      <h1 className="mt-11 mb-8 text-3xl font-bold text-center Blackheadingshadow">
        Our Contributor
      </h1>
      <div className="flex items-center justify-center gap-20 flex-wrap w-[80%]">
        {/* <ContributorCard
          name="Ayush Sharma"
          position="Volunter"
          linkedin="#"
          image={Anshul}
        /> */}
        {CoreTeamMember.map((data,index)=>(
          <ContributorCard />
        ))}
      </div>
    </>
  );
}

export default ContributorList;
