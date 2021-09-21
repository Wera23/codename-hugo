import React, { useRef } from "react";
import { Lottie, ReactLottieConfig } from "@crello/react-lottie";
import { AnimationItem } from "lottie-web";
import homeAnimation from "../../assets/images/homeAnimation.json";

export const HomeAnimation: React.FC<{ height?: string }> = () => {
  const animRef = useRef<AnimationItem>({} as AnimationItem);
  const defaultOptions: ReactLottieConfig = {
    animationData: homeAnimation,
    loop: true,
    autoplay: false,
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-cenetr h-100">
      <Lottie animationRef={animRef} config={defaultOptions} width={"300px"} />
    </div>
  );
};
