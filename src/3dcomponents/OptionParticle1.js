import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react";

export default function OptionParticle1(props){

  const ref = useRef()
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
            position={[40,0,0]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => {
              window.appHistory.push("/#/syptoms")
              setTimeout((() => {window.location.reload()}), 100)
            }}
        >
            <icosahedronGeometry args={[5]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    )
}