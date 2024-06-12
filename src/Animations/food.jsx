import Lottie from "react-lottie";

import animationData from "../assets/food.json";

const Food = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={170} width={200} />;
};

export default Food;
