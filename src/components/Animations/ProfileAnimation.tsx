import React, { useRef } from "react";
import { Lottie, ReactLottieConfig } from "@crello/react-lottie";
import { AnimationItem } from "lottie-web";
import profileAnimation from "../../assets/images/profileAnimation.json";


export const ProfileAnimation: React.FC<{ height?: string }> = () => {
  const animRef = useRef<AnimationItem>({} as AnimationItem);
  const defaultOptions: ReactLottieConfig = {
    animationData: profileAnimation,
    loop: true,
    autoplay: false,
  };

  return (
    <div className="d-flex justify-content-center align-items-cenetr">
      <Lottie animationRef={animRef} config={defaultOptions} width={"120px"} />
    </div>
  );
};
