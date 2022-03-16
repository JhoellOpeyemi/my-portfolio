import React, { useRef } from "react";
import { Sphere, useNormalTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HeroModel = ({ position, scale }) => {
  const [normalMap, url] = useNormalTexture(72, {
    offset: [0, 0],
    anisotropy: 8,
  });

  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.007;
  });

  return (
    <mesh ref={ref} position={position}>
      <Sphere scale={scale}>
        <meshStandardMaterial normalMap={normalMap} attach="material" />
      </Sphere>
    </mesh>
  );
};

export default HeroModel;
