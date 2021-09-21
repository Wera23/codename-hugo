import React, { useRef } from "react";
import { Lottie, ReactLottieConfig } from "@crello/react-lottie";
import { AnimationItem } from "lottie-web";
import userAnimation from "../../assets/images/userAnimation.json";

export const UserAnimation: React.FC<{ height?: string }> = () => {
  const animRef = useRef<AnimationItem>({} as AnimationItem);
  const defaultOptions: ReactLottieConfig = {
    animationData: userAnimation,
    loop: true,
    autoplay: false,
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-cenetr h-100 pt-5">
      <Lottie animationRef={animRef} config={defaultOptions} width={"200px"} />
    </div>
  );
};
