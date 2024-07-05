import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      easing: "ease-in-sine",
      duration: 600,
    });
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center flex-wrap py-8"
      data-aos="fade-zoom-in"
      id="About"
    >
      <h2 className="text-gray-900 font-bold text-3xl leading-10 mt-6 mb-4 m-6 mr-4 ml-4 md:mr-0 text-center ">
        About AWS Student Community Day 2024
      </h2>
      <p className="text-gray-700 max-w-[900px] text-justify leading-8 m-4 text-xl md:m-0 ">
        <p className="mb-4">
        Welcome to the AWS Student Community Day Indore, a gathering aimed at exploring the latest 
        trends, innovations, and best practices in the world of cloud computing offered by 
        Amazon Web Services (AWS).
        </p>

        <p className="mb-4">
        Our Student Community Day brings together experts, 
        enthusiasts, and learners from various domains to delve into the advancements, strategies, 
        and real-world applications of AWS cloud services.
        </p>

        <p className="mb-4">
        Join us for insightful sessions, 
        engaging discussions, hands-on workshops, and networking opportunities, all 
        tailored to expand your knowledge and proficiency in leveraging AWS solutions.
        </p>
      </p>
    </div>
  );
}

export default About;
