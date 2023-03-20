import { Stage, OrbitControls } from "@react-three/drei";
import Door from "./Nobs";
// import Model from './Bobs'
import { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context/status";
// import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
export default function Experience() {
  //  }
  const { tab } = useGlobalContext();
  console.log(tab);
  return (
    <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{ type: "accumulative", colorBlend: 2, opacity: 2 }}
        adjustCamera={0.9}
      >
        <Door />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
