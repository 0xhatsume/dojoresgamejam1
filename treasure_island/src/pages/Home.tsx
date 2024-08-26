import React from 'react';

import { Canvas } from "@react-three/fiber";
import { Experience, UI } from "../components";
import { AudioManagerProvider } from '../hooks';
import { Physics } from '@react-three/rapier';
import { GameStateProvider } from '../hooks';

export const Home = () => {
  return (
    <AudioManagerProvider>
      <GameStateProvider>
        <Canvas shadows camera={{ position: [0, 16, 10], fov: 42 }}>
          <color attach="background" args={["#049CC8"]} />
          <Physics debug>
            <Experience />
          </Physics>
        </Canvas>
        <UI />
      </GameStateProvider>
    </AudioManagerProvider>
  )
}
