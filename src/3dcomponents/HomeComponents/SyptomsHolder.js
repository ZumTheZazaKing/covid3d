import SyptomsButton from './SyptomsButton';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SyptomsHolder(){

    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.001;
    })

    return(
        <mesh position={[0,0,0]} ref={ref}>
            <SyptomsButton/>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color={0xffffff}/>
        </mesh>
    )
}