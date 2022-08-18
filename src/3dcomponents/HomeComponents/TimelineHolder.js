import TimelineButton from "./TimelineButton";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TimelineHolder(){

    const ref = useRef();

    /*
    useFrame(() => {
        ref.current.rotation.y += 0.0008;
    })
    */

    return(
        <mesh position={[0,0,0]} rotation={[0,11.5,0]} ref={ref}>
            <TimelineButton scale={15} position={[-250,0,0]} rotation={[0,200,0]}/>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color={0xffffff}/>
        </mesh>
    )
}