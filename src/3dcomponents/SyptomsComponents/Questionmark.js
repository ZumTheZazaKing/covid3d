/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: aniljaco (https://sketchfab.com/aniljaco)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/quest-mark---anil-4cd9262e941e48c997715dcfeff27e6d
title: Quest mark _ Anil
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Questionmark(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/questionmark.glb");
  useFrame(({clock}) => {
    group.current.rotation.z = -Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
  })
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[3,-9,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/questionmark.glb");
