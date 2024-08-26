import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Color } from "three";
import { MathUtils, randFloat, randInt } from "three/src/math/MathUtils.js";
import { useAudioManager } from "../hooks/useAudioManager";

const TIME_AFTER_HIT = 600;

export function Hexagon({ color, onHit, hit, ...props }) {
  const { playAudio } = useAudioManager();
  const { nodes, materials } = useGLTF("/models/hexagon.glb", "draco/gltf/");
  const hexagonMaterial = useRef();

  const [disabled, setDisabled] = useState(false);
  const randomizedColor = useMemo(() => {
    const alteredColor = new Color(color);
    alteredColor.multiplyScalar(randFloat(0.5, 1.2));
    return alteredColor;
  }, [color]);

  useFrame((_, delta) => {
    if (hit && !disabled) {
      hexagonMaterial.current.opacity = MathUtils.lerp(
        hexagonMaterial.current.opacity,
        0,
        delta * 1.2
      );
    }
  });

  useEffect(() => {
    if (hit) {
      setTimeout(() => {
        setDisabled(true);
        playAudio(`Pop${randInt(1, 5)}`);
      }, TIME_AFTER_HIT);
    }
  }, [hit]);

  if (disabled) {
    return null;
  }

  return (
    <RigidBody
      {...props}
      type={"fixed"}
      name="hexagon"
      colliders="hull"
      onCollisionEnter={(e) => {
        if (e.other.rigidBodyObject.name === "player") {
          onHit();
        }
      }}
    >
      <mesh geometry={nodes.Hexagon.geometry} material={materials.hexagon}>
        <meshStandardMaterial
          ref={hexagonMaterial}
          {...materials.hexagon}
          color={hit ? "orange" : randomizedColor}
          transparent
        />
      </mesh>
    </RigidBody>
  );
}

useGLTF.preload("/models/hexagon.glb", "draco/gltf/");
