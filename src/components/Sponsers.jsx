import React from "react";

const Sponsers = () => {
  return (
    <div id="Sponsers" className="py-8 flex flex-col items-center gap-y-3">
      <h2 className="leading-10 text-3xl font-bold text-center  Blackheadingshadow">
        Call For Sponsers
      </h2>
      <p className=" text-xl font-bold text-center  ">
        Intrested in sponsorship ?
      </p>
      <p className=" text-md font-bold text-center  ">
        Contact us at{" "}
        <a
          href="mailto:ascdindore@gmail.com"
          target="blank"
          className="text-blue-500"
        >
          ascdindore@gmail.com
        </a>{" "}
        or{" "}
        <a
          href="mailto:awscc.iips@gmail.com"
          target="blank"
          className="text-blue-500"
        >
          awscc.iips@gmail.com
        </a>
      </p>

      <div className="flex flex-col">
        <p className=" text-xl font-bold text-center  ">Why sponser us?</p>
        <div className="flex">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
