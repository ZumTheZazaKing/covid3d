import StoryButton from "./StoryButton";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function StoryHolder(){

    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.002;
    })

    return(
        <mesh position={[0,0,0]} ref={ref}>
            <StoryButton/>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color={0xffffff}/>
        </mesh>
    )
}