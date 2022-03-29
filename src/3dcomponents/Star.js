import { useRef } from "react"
import * as THREE from 'three'

export default function Box(props){

  const ref = useRef()

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(600))

    return (
        <mesh {...props} ref={ref} position={[x,y,z]}>
          <sphereGeometry args={[1]}/>
          <meshStandardMaterial color={0x000000}/>
        </mesh>
    )
}