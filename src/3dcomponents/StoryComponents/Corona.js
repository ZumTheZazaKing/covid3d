/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Teliri (https://sketchfab.com/Teliri)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/coronavirus-b28f63adc5f04a2aab27e1d7293eba0b
title: Coronavirus
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Corona(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/corona.glb");
  useFrame((state, delta) => {
    group.current.rotation.y += 0.004;
  })
  return (
    <group ref={group} {...props} dispose={null} scale={0.02}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={nodes.Object_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.SphereLow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={nodes.Object_2.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/corona.glb");