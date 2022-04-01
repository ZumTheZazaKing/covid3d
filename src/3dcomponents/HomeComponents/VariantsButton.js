/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Jackmcm (https://sketchfab.com/Jackmcm)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/green-glowing-test-tube-a4ef21580119414ebd2337267573e4ca
title: Green Glowing Test Tube
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export default function VariantsButton(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/variantsButton.glb");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scale } = useSpring({
    scale: hovered ? 2 : 1.5,
    config: config.wobbly
  });

  useFrame(({clock}) => {
    group.current.rotation.z = Math.sin(clock.getElapsedTime())
  })

  return (
    <animated.group ref={group} {...props} dispose={null} 
      position={[-50,0,0]} 
      rotation={[-200,0,0]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        window.appHistory.push("/#/variants")
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
          Variants
        </div>
      </Html>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 5.49, -3.82]}
            rotation={[-0.29, -0.05, -0.02]}
            scale={[1, 4.45, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder8_blinn2_0.geometry}
              material={materials.blinn2}
            />
          </group>
          <group
            position={[0.1, 9.54, -5]}
            rotation={[-0.29, -0.05, -0.02]}
            scale={0.99}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder9_blinn1_0.geometry}
              material={materials.blinn1}
            />
          </group>
          <group
            position={[0, 5.76, -3.88]}
            rotation={[-0.29, -0.05, -0.02]}
            scale={[0.89, 4.51, 0.89]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder10_blinn3_0.geometry}
              material={materials.blinn3}
            />
          </group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/variantsButton.glb");