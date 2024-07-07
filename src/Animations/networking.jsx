import Lottie from "react-lottie";

import animationData from "../assets/Animations/networking.json";

const NetworkingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={150} width={200} />;
};

export default NetworkingAnimation;
