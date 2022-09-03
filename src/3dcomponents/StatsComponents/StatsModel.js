/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function StatsModel(props) {
  const { nodes, materials } = useGLTF("/stats.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.27, -0.19, 0.16]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id73.geometry}
          material={materials["87"]}
          position={[-55.24, -16.75, 7.5]}
        />
      </group>
      <group position={[-0.02, -0.19, 0.16]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id95.geometry}
          material={materials["89"]}
          position={[-52.01, -16.84, 7.5]}
        />
      </group>
      <group position={[0.25, -0.19, 0.16]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id104.geometry}
          material={materials["91"]}
          position={[-54.43, -16.75, 7.5]}
        />
      </group>
      <group position={[-0.27, -0.06, 0.14]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id114.geometry}
          material={materials["93"]}
          position={[-49.49, -16.77, 7.5]}
        />
      </group>
      <group position={[-0.02, 0.04, 0.14]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id122.geometry}
          material={materials["95"]}
          position={[-63.3, -16.75, 7.5]}
        />
      </group>
      <group position={[0.24, 0.14, 0.14]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_id130.geometry}
          material={materials["97"]}
          position={[-63.7, -16.84, 7.5]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id27.geometry}
        material={materials["79"]}
        position={[-0.01, -0.7, -0.45]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id35.geometry}
        material={materials["83"]}
        position={[-0.27, -0.28, 0.02]}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id29.geometry}
        material={materials["81"]}
        position={[-0.01, -0.05, 0.02]}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_id41.geometry}
        material={materials["85"]}
        position={[0.25, 0.14, 0.02]}
        scale={0.0015}
      />
    </group>
  );
}

useGLTF.preload("/stats.glb");