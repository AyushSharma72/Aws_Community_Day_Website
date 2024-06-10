import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "../assets/Animation - 1717906201771.json";

const AwsAnimation = () => {
  const [isAnimationStopped, setIsAnimationStopped] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("AnimationDiv");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom >= 20; //if the div bottom go out of view port
        setIsAnimationStopped(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Lottie
      options={defaultOptions}
      height={170}
      width={200}
      isStopped={isAnimationStopped}
    />
  );
};

export default AwsAnimation;
