import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import AnimatedHackerRoom from "../components/AnimatedHackerRoom";

import perfil from "/assets/perfil.JPG";

const Hero = () => {
  // Leva Control
  //   const controls = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });

  // Responsive Element 3D
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  //   intro Text
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["FullStack Developer!", "Network Analyst NOC/SOC!"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed]);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-r from-[#00000041] via-[#1a1a1a98] to-[#0000008d] bg-[length:200%_200%]"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-4 px-4 sm:px-8 mt-35 sm:mt-32 md:mt-57 lg:mt-25 xl:mt-42">
        <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-5xl font-medium text-white text-center ">
          Hi, i'm Ezequiel
        </h1>
        <img
          src={perfil}
          alt="perfil"
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg overflow-hidden animate-glow profile-floating"
        />

        <h2 className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          {text} <span className="text-lg floating-rocket"> 🚀</span>
        </h2>
        <h3 className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-2xl font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent mt-5">
          Delivering Clean Architecture
        </h3>

        <p className="text-base leading-relaxed text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BEC1CF] via-[#D5D8EA] to-[#D5D8EA] px-3 sm:px-6 md:px-8 mx-auto max-w-3xl sm:max-w-4xl md:text-lg">
          Especialista em desenvolvimento de software com foco em arquitetura
          limpa, performance e manutenibilidade.
        </p>
      </div>

      <div className="mt-55 w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <AnimatedHackerRoom />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.3} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
