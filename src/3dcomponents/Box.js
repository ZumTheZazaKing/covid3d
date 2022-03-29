import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Box(props){

  const ref = useRef()

  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    return (
        <mesh {...props} ref={ref}>
          <boxGeometry args={[5,5,5]}/>
          <meshStandardMaterial/>
        </mesh>
    )
}