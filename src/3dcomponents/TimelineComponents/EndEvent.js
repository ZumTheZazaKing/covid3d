import { Html } from "@react-three/drei"

export default function EndEvent(){
    return (
        <mesh
            position={[48,0,0]}
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
                <p>Time will tell...</p>
            </Html>
            <sphereGeometry args={[0.3]}/>
            <meshStandardMaterial color={"green"}/>
        </mesh>
    )
}