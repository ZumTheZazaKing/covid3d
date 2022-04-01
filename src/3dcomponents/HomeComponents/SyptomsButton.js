/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BlackCube (https://sketchfab.com/blackcube4)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/fever-thermometer-acb2c16f9224404d996ab44c26d58176
title: Fever thermometer
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export default function SyptomsButton(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/thermometer.glb");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scale } = useSpring({
    scale: hovered ? 300 : 200,
    config: config.wobbly
  });

  useFrame(({clock}) => {
    group.current.rotation.y = Math.sin(clock.getElapsedTime())
  })

  return (
    <animated.group ref={group} {...props} dispose={null} 
      position={[100,0,0]}
      rotation={[200,0,0]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        window.appHistory.push("/#/syptoms")
        setTimeout((() => {window.location.reload()}), 100)
      }}
    >
      <Html scaleFactor={10}
        style={{
          pointerEvents: "none", 
          display: hovered ? "block" : "none",
          color:"white",
          padding:"10px",
          backgroundColor:"rgba(0,0,0,0.5)",
          borderRadius:"5px"
        }}
      >
        <div className="content">
          Syptoms
        </div>
      </Html>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.05}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -6.55]} scale={1.17}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fever_thermometer_Tip_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fever_thermometer_Glas_0.geometry}
              material={materials.Glas}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fever_thermometer_Display_0.geometry}
              material={materials.Display}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fever_thermometer_Main_0.geometry}
              material={materials.Main}
            />
          </group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/thermometer.glb");
