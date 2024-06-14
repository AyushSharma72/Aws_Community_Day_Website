import React from "react";
import SpeakerCard from "./SpeakerCard";

function Speakers() {
  return (
    <div id="Speakers">
      <h1 className=" font-[Poppins, sans-serif] leading-10 text-3xl font-bold text-center mt-4 Blackheadingshadow">
        SPEAKERS
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="flex md:flex-row flex-wrap gap-10 md:gap-20 justify-center items-center ">
          <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          />
          <SpeakerCard
            heading="DIk"
            about="@Senior developer"
            image="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg"
            linkedin="#"
          />
          <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          />
          <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          />
          <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          />
          <SpeakerCard
            heading="DIk"
            about="@Junior developer"
            image="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg"
            linkedin="#"
          />
          {/* <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          />
          <SpeakerCard
            heading="ABC"
            about="@Senior developer"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW85F3Ujr5LIdcYWTutZSuEYzS17M0TG1B5A&s"
            linkedin="#"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
