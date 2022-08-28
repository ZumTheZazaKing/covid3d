/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Teliri (https://sketchfab.com/Teliri)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/coronavirus-b28f63adc5f04a2aab27e1d7293eba0b
title: Coronavirus
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export default function Corona(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/corona.glb");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scale } = useSpring({
    scale: hovered ? 0.9 : 0.8,
    config: config.wobbly
  });

  useFrame(() => {
    group.current.rotation.y += 0.004;
  })

  return (
    <animated.group ref={group} {...props} dispose={null}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        window.appHistory.push("/#/covid")
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
          COVID
        </div>
      </Html>
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
    </animated.group>
  );
}

useGLTF.preload("/corona.glb");