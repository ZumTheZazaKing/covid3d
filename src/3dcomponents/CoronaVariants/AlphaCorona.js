/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: anurag.anand (https://sketchfab.com/anurag.anand)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/coronavirus-covid-19-e503a898c579454ebe103fc02ea2683c
title: Coronavirus (COVID-19)
*/

import { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AlphaCorona(props) {

  const [hovered, setHovered] = useState(false)

  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.z += 0.01;
    group.current.rotation.x += 0.01;
  })
  const { nodes, materials } = useGLTF("/alpha.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={0.6}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Html scaleFactor={10}
        style={{
          pointerEvents: "none", 
          display: hovered ? "block" : "none",
          color:"white",
          padding:"10px",
          backgroundColor:"rgba(0,0,0,0.5)",
          borderRadius:"5px",
        }}
      >
        <div className="content">
          Amusement purposes only
        </div>
      </Html>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/alpha.glb");

