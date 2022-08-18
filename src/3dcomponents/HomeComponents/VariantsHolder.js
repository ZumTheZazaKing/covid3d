import VariantsButton from "./VariantsButton";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function VariantsHolder(){

    const ref = useRef();

    /*
    useFrame(() => {
        ref.current.rotation.y += 0.006;
    })
    */

    return(
        <mesh position={[0,0,0]} rotation={[0,10,0]} ref={ref}>
            <VariantsButton/>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color={0xffffff}/>
        </mesh>
    )
}