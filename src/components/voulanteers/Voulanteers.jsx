import React from "react";
import Aditi from "../../assets/Volunteers/Aditi.jpg";
import Abdul from "../../assets/Volunteers/Abdul.jpg";
import Aditya from "../../assets/Volunteers/Aditya.jpg";
import Akshat from "../../assets/Volunteers/Akshat.jpg";
import Anika from "../../assets/Volunteers/Anika.jpg";
import Anurag from "../../assets/Volunteers/Anurag.jpg";
import Arni from "../../assets/Volunteers/Arni.jpg";
import Ayushi from "../../assets/Volunteers/Ayushi.jpg";
import Ishita from "../../assets/Volunteers/Ishita.jpg";
import Kajal from "../../assets/Volunteers/Kajal.jpg";
import Khushi from "../../assets/Volunteers/Khushi.jpg";
import Kratik from "../../assets/Volunteers/Kratik.jpg";
import Lavanya from "../../assets/Volunteers/Lavanya.jpg";
import Palak from "../../assets/Volunteers/Palak.jpg";
import Sneha from "../../assets/Volunteers/Sneha.png";
import Tushar from "../../assets/Volunteers/Tushar.jpg";
import Prakhar from "../../assets/Volunteers/Prakhar.png";

const Voulanteers = () => {
  const Information = [
    {
      name: "Aditi Barod",
      linkedin:
        "https://www.linkedin.com/in/aditi-barod-82414327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Aditi,
    },
    {
      name: "Anurag Solanki",
      linkedin:
        "https://www.linkedin.com/in/anurag-solanki-980841277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Anurag,
    },
    {
      name: "Arni Khede",
      linkedin:
        "https://www.linkedin.com/in/arni-khede?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Arni,
    },
    // {
    //   name: "Diksha Gupta",
    //   linkedin: "https://www.linkedin.com/in/diksha-gupta3094/",
    //   image: Diksha,
    // },
    {
      name: "Kajal Bharti",
      linkedin:
        "https://www.linkedin.com/in/kajal-bharti-b26690278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Kajal,
    },
    {
      name: "Kratik Mandloi",
      linkedin:
        "https://www.linkedin.com/in/kratik-mandloi-7632a9287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Kratik,
    },
    {
      name: "Sneha Likhar",
      linkedin:
        "https://www.linkedin.com/in/sneha-likhar-140560244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Sneha,
    },
    {
      name: "Lavanaya Hardas",
      linkedin:
        "https://www.linkedin.com/in/lavanya-hardas-24a649294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Lavanya,
    },
    {
      name: "Palak Kumrawat",
      linkedin: "https://www.linkedin.com/in/palak-kumrawat",
      image: Palak,
    },
    {
      name: "Aditya Agrawal",
      linkedin: "https://www.linkedin.com/in/aditya-agrawal-87a18a23a",
      image: Aditya,
    },
    {
      name: "Akshat Thakur",
      linkedin:
        "https://www.linkedin.com/in/akshat-thakur-63026427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Akshat,
    },
    {
      name: "Aayushi Rathore",
      linkedin:
        "https://www.linkedin.com/in/aayushi-rathore-4b630a310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Ayushi,
    },
    {
      name: "Ishita Agrawal",
      linkedin: "https://www.linkedin.com/in/ishita-agrawal-32a654279/",
      image: Ishita,
    },
    {
      name: "Abdul Rehman",
      linkedin: "www.linkedin.com/in/ar-mansoori",
      image: Abdul,
    },
    {
      name: "Khushi Dixit",
      linkedin: "https://www.linkedin.com/in/khushi-dixit-0a3468328",
      image: Khushi,
    },
    {
      name: "Prakhar Pancholi",
      linkedin: "https://www.linkedin.com/in/prakhar-pancholi-b05b072bb",
      image: Prakhar,
    },
    {
      name: "Tushar Kharade",
      linkedin:
        "https://www.linkedin.com/in/tushar-kharade-2171b0299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Tushar,
    },
    {
      name: "Anika Babar",
      linkedin:
        "https://www.linkedin.com/in/anika-babar-143926323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Anika,
    },
  ];

  return (
    <div className="w-full flex justify-center flex-col mt-10 mb-10">
      <p className="text-3xl font-bold mt-6 mb-6 Blackheadingshadow m-auto">
        VOLUNTEERS
      </p>

      {/* card */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-5 sm:gap-20">
        {Information.map((Info, index) => (
          <div key={index}>
            <a href={Info.linkedin} target="_blank">
              <img
                src={Info.image}
                className="w-[150px] h-[150px] rounded-full object-cover"
              />
            </a>

            <div className="text-center">
              <a href={Info.linkedin} target="_blank">
                <p className="text-lg font-extrabold hover:text-[#4300b1]">
                  {Info.name}
                </p>
              </a>
              <p className="font-medium">Volunteer</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voulanteers;
