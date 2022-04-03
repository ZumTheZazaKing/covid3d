import StatsButton from './StatsButton'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Stats(){

    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.002;
    })

    return(
        <mesh position={[0,0,0]} ref={ref}>
            <StatsButton position={[-150,0,0]}/>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color={0xffffff}/>
        </mesh>
    )
}