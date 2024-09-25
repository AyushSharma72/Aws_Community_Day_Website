import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Ayush from "../../assets/CoreTeam/Ayush.jpg";
import Ambika from "../../assets/CoreTeam/Ambika.jpg";
import Anshul from "../../assets/CoreTeam/Anshul.jpg";
import Angad from "../../assets/CoreTeam/Angad.jpg";
import Harshali from "../../assets/CoreTeam/Harshali.jpg";
import Kashi from "../../assets/CoreTeam/Kashi.jpg";
import Kunal from "../../assets/CoreTeam/Kunal.jpg";
import Parag from "../../assets/CoreTeam/Parag.png";
import Saara from "../../assets/CoreTeam/Saara.jpg";
import Vanshita from "../../assets/CoreTeam/Vanshita.jpg";
import lochan from "../../assets/Volunteers/lochan.jpg";
import Chetan from "../../assets/Volunteers/Chetan.jpg";
import Animesh from "../../assets/Volunteers/Animesh.jpg";
import Anekant from "../../assets/Volunteers/Anekant.jpg";

let CoreTeamMember = [
  {
    id: "1",
    name: "Ayush Sharma ",
    linkedin:
      "https://www.linkedin.com/in/ayush-sharma-a155a8267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Ayush,
  },
  ,
  {
    id: "2",
    name: "Ambika Choudhary",
    linkedin:
      "https://www.linkedin.com/in/ambika-choudhary-619964277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Ambika,
  },
  {
    id: "3",
    name: "Anshul Tomar",
    linkedin:
      "https://www.linkedin.com/in/anshul-tomar-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Anshul,
  },
  {
    id: "4",
    name: "Angad Singh Saluja ",
    linkedin:
      "https://www.linkedin.com/in/angad-singh-saluja-770299225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: Angad,
  },

  // {
  //   id: "5",
  //   name: "Chitresh Mourya",
  //   linkedin:
  //     "#",
  //   image: '',
  // },
  {
    id: "6",
    name: "Harshali Thakur",
    linkedin: "https://www.linkedin.com/in/harshali-thakur-576753274",
    image: Harshali,
  },
  {
    id: "7",
    name: "Kashi Sankhla",
    linkedin: "https://www.linkedin.com/in/kashi-sankhla-41a1a6222/",
    image: Kashi,
  },
  {
    id: "8",
    name: "Kunal Malviya",
    linkedin: "https://www.linkedin.com/in/kunal-malviya-294b2b255",
    image: Kunal,
  },
  {
    id: "9",
    name: "Parag Dongre",
    linkedin: "https://www.linkedin.com/in/parag-dongre/",
    image: Parag,
  },
  {
    id: "10",
    name: "Saara Khan",
    linkedin: "https://www.linkedin.com/in/saarakhan001",
    image: Saara,
  },
  {
    id: "11",
    name: "Vanshita Rajoriya ",
    linkedin: "https://wwwlinkedin.com/in/vanshita-rajoriya-955041248",
    image: Vanshita,
  },
  { id: "12", name: "Lochan Vaidya", linkedin: "#", image: lochan },
  { id: "13", name: "Anekant Jain", linkedin: "#", image: Anekant },
  { id: "14", name: "Chetan Mehta", linkedin: "#", image: Chetan },
  { id: "15", name: "Animesh Bokil", linkedin: "#", image: Animesh },
];

function ContributorList() {
  return (
    <div className="w-full flex justify-center flex-col mt-10 mb-10">
      <p className="text-3xl font-bold mt-6 mb-6 Blackheadingshadow m-auto text-center">
        CORE TEAM MEMBERS
      </p>

      {/* card */}
      <div className="flex flex-wrap justify-center items-center md:gap-20  gap-y-10 gap-x-20 mt-5 mx-2">
        {CoreTeamMember.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="relative group">
              <a href={member.linkedin} target="_blank">
                <img
                  src={member.image}
                  className="w-[150px] h-[150px] rounded-xl object-cover hover:bg-black hover:opacity-85"
                />
              </a>

              <a
                href={member.linkedin}
                target="_blank"
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaLinkedin className="text-blue-700 text-center w-8 h-8" />
              </a>
            </div>

            <div className="text-center mt-2">
              <a href={member.linkedin} target="_blank">
                <p className="text-lg font-extrabold text-center cursor-pointer hover:text-purple-900">
                  {member.name}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributorList;
