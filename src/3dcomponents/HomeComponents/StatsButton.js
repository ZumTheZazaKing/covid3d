/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: tkkjee (https://sketchfab.com/tkkjee)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/graph-a6fdbd1bdb894fbc85da9fcc6496c503
title: graph
*/

import { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export default function StatsButton(props) {
  const group = useRef();
  useFrame(() => {
      group.current.rotation.y += 0.01
  })
  const { nodes, materials } = useGLTF("/graph.glb");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scale } = useSpring({
    scale: hovered ? 7 : 5,
    config: config.wobbly
  });

  return (
    <animated.group ref={group} {...props} dispose={null} 
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
            window.appHistory.push("/#/stats")
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
          Stats
        </div>
      </Html>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 2.07, 0]} scale={1.12}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={nodes.Object_4.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={nodes.Object_5.material}
            />
          </group>
          <group position={[0, 0.92, 0]} scale={[0.65, 0.78, 0.65]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["1.005"]}
            />
          </group>
          <group
            position={[0, 1.83, 0.22]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.44, 0.44, 0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["1.001"]}
            />
          </group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/graph.glb");
