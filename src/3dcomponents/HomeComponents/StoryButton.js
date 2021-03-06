/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Makovetkyi Volodymyr (https://sketchfab.com/pbr-scans)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pb153-notebook-low-79f30cb4af5a40c482e487c8e7c3c58d
title: PB153 Notebook Low
*/

import { useRef, useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export default function StoryButton(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/storybook.glb");

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scale } = useSpring({
    scale: hovered ? 1.5 : 1,
    config: config.wobbly
  });

  useFrame(({clock}) => {
    group.current.rotation.z = Math.sin(clock.getElapsedTime())
  })


  return (
    <animated.group ref={group} {...props} dispose={null}
        position={[200,0,0]}
        rotation={[150,0,0]}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => {
            window.appHistory.push("/#/story")
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
          Story
        </div>
      </Html>
      <group position={[0, 9.87, -9.67]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.initialShadingGroup}
        />
      </group>
    </animated.group>
  );
}

useGLTF.preload("/storybook.glb");