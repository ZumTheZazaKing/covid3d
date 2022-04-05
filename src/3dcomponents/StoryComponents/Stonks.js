/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: cig3d (https://sketchfab.com/cig3d)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/statistic-charts-with-arrow-86f9238bdaf44e098b6da4d82ee1861f
title: Statistic Charts With Arrow
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";

export default function Stonks(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/stonks.glb");
  return (
    <group ref={group} {...props} dispose={null} position={[23,-1,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.25, 0, 0]} scale={[0.32, 0.32, 0.28]}>
          {/***Third Section */}
          <Html>
          <div
            style={{
              top:"-350px",
              left:"-180px",
              width:"100vw", 
              padding:"20px",
              position:"absolute",
            }}
          >
            <h2 style={{textAlign:"right"}}>My Uprising</h2>
            <br/>
            <p style={{lineHeight:1.5, textAlign:"right"}}>
              Ah yes, my uprising. It happened when some organization called WHO<br/>
              recognized me as a pandemic around March 2020. The fame, the glory.<br/>
              I was the topic of everyone's lives no matter where they ran to.<br/>
              I was everywhere on the internet. Ah, the golden days.
              <br/><br/>
              But of course, there were also downfalls to my increasing popularity. <br/>
              The humans had started to become more and more wary of me. Thus, <br/>
              they took precautions against me which proved to be quite a nuisance to<br/>
              my spreading influence. I mean, what the heck is social distancing and<br/>
              why is it so annoying?! They also started putting on some sort of<br/>
              transparent lotion on themselves and wore masks on their faces.
              <br/><br/>
              The situation didn't look too good for me. Thus, I did what anyone would<br/>
              do. Retaliate. I created different variants of myself and even though<br/>
              most of them weren't fit for the job, a handful were able to successfully<br/>
              become threats to humankind. With my Delta variant being the deadliest and my<br/>
              Omicron variant being the most resilient and most contagious.
              <br/><br/>
              How do you like them apples?
            </p>
          </div>
          </Html>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group position={[0.61, 0, 0]} scale={[0.32, 0.32, 0.53]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group position={[1.44, 0, 0]} scale={[0.32, 0.32, 0.78]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_0.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          position={[-1.48, -0.05, 0.21]}
          rotation={[0, 0.57, 0]}
          scale={[0.09, 0.07, 0.58]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/stonks.glb");
