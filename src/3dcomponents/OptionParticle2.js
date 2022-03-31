import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function OptionParticle2(props){

  const ref = useRef();
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
  })

    return (
        <mesh 
            {...props} 
            ref={ref} 
            onClick={() => {
                window.appHistory.push("/#/variants")
                setTimeout((() => {window.location.reload()}), 100)
            }}
            position={[-40,0,0]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <icosahedronGeometry args={[5]}/>
            <meshStandardMaterial color="blue"/>
        </mesh>
    )
}