import React from 'react';

import { Canvas } from "@react-three/fiber";
import { Experience, UI } from "../components";
import { AudioManagerProvider } from '../hooks';

export const Home = () => {
  return (
    <AudioManagerProvider>
      <Canvas shadows camera={{ position: [0, 16, 10], fov: 42 }}>
        <color attach="background" args={["#049CC8"]} />
        <Experience />
      </Canvas>
      <UI />
    </AudioManagerProvider>
  )
}
