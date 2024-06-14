import React from "react";

import { FaLocationDot } from "react-icons/fa6";
function Venue() {
  return (
    <div className=" bg-[#ffeab25d]">
      <div className="font-[Poppins, sans-serif] leading-10 text-3xl font-bold text-center mt-20">
        VENUE
      </div>

      <div className=" flex flex-col md:flex-row justify-center items-center gap-x-10 mt-7 py-10 ">
        <div className=" flex-col items-center justify-center ">
          <div className="flex flex-col md:flex-row lg:items-center lg:justify-center lg:gap-2">
            <span>
              <FaLocationDot />
            </span>{" "}
            <p className="text-2xl font-semibold text-center">
              Devi Ahilya University{" "}
              <span className="text-[#4300b1] font-bold">Auditorium</span>
            </p>
          </div>

          <p className="text-2xl font-semibold text-center ">
            Khandwa Road Davv Takshila Parisar, Indore
          </p>
        </div>

        <div>
          {" "}
          <div className="px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.103153700156!2d75.87619407508129!3d22.68720357941027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc25a1f326f%3A0x11c60dc83a7e56f0!2sDevi%20Ahilya%20University%20Auditorium!5e0!3m2!1sen!2sin!4v1718279579287!5m2!1sen!2sin"
              width={500}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
