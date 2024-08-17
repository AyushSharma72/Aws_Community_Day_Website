import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function SpeakerCard(props) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  
  return (
    <div
      className="flex flex-row border-solid border-2 border-black-500 mt-8"
      data-aos="fade-zoom-in"
    >
      <div class="rounded-xl overflow-hidden relative text-center p-10 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl  w-[250px] md:w-80">
        <div class="text-gray-500 group-hover:scale-105 transition-all">
          <img
            class=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded"
            src={props.image}
          />
        </div>
        <div class="group-hover:pb-10 transition-all duration-500 delay-200">
          <h1 class="font-semibold text-gray-700">{props.heading}</h1>
          <p class="text-gray-500 text-justify text-sm">{props.about}</p>
        </div>
        <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full cursor-pointer">
          <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded shadow-sm">
            <a
              class="hover:scale-110 transition-all duration-500 delay-200"
              href={props.linkedin}
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
         
    </div>
  );
}

export default SpeakerCard;
