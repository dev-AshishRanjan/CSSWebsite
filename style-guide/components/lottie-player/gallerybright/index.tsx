import React from "react";
import Lottie from "react-lottie";
import animationData from "./gallerylottiebright.json";

export default function BrightGallery() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
      height={"100%"}
        // width={"30vw"}
        options={defaultOptions}
        speed={1.5}
      />
    </div>
  );
}
