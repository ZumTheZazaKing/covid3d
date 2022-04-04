import { Html } from "@react-three/drei"

export default function StartEvent(){
    return (
        <mesh
            position={[-1,0,0]}
        >
            <Html
                style={{
                    pointerEvents: "none",
                    fontWeight:"bold",
                    top:"40px",
                    left:"-150px",
                    width:"300px",
                    textAlign:"center"
                }}
            >
                <p>Start</p>
            </Html>
            <sphereGeometry args={[0.3]}/>
            <meshStandardMaterial color={"orange"}/>
        </mesh>
    )
}