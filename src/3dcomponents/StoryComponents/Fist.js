/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Arkdirfe (https://sketchfab.com/Arkdirfe)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/gypsum-fist-18edf463ee424903aa5d9fe3d54a9694
title: Gypsum Fist
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Fist(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/fist.glb");
  return (
    <group ref={group} {...props} dispose={null} 
        scale={1.2} 
        position={[43,-5,-2]}
        rotation={[5,-25,4.5]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={nodes.Object_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={nodes.Object_3.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fist.glb");