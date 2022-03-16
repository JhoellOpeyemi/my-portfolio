import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import HeroHtmlContent from "./HeroHtmlContent";
import HeroModel from "./HeroModel";

import "../styles/hero.css";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <main className="main">
      <Canvas colorManagement>
        <Suspense fallback={null}>
          <HeroHtmlContent />
          {screenWidth <= 860 ? (
            <>
              <pointLight
                color="#fd6868"
                position={[1, 2, 1]}
                intensity={0.4}
              />
              <pointLight
                color="#83eeff"
                position={[1.3, -2, -3]}
                intensity={0.5}
              />
              <HeroModel position={[0, 0, 0]} scale={1.1} />
            </>
          ) : (
            <>
              <pointLight
                color="#83eeff"
                position={[2.3, 9, 0]}
                intensity={0.5}
              />
              <HeroModel position={[3.5, -0.4, 0]} scale={1.2} />
            </>
          )}
        </Suspense>
      </Canvas>
    </main>
  );
};

export default Hero;
