import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { css } from "aphrodite";
import { TimelineStyles } from "../../styles/TimelineStyles";

export default function Event(props){

    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh
            position={props.position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setClicked(!clicked)}
        >
            <Html scaleFactor={10}
                style={{
                    pointerEvents: "none", 
                    display: clicked ? "block" : "none",
                    color:"white",
                    padding:"10px",
                    backgroundColor:"rgba(56,56,56,1)",
                    borderRadius:"5px",
                    width:"400px",
                    lineHeight:1.5
                }}
                className={css(props.left ? TimelineStyles.leftEvent : "")}
            >
                <div>
                    <h3>{props.date}</h3>
                    <br/>
                    <p>{props.context}</p>
                </div>
            </Html>
            <Html
                style={{
                    pointerEvents: "none",
                    fontWeight:"bold",
                    top:"-55px",
                    left:"-150px",
                    width:"300px",
                    textAlign:"center"
                }}
            >
                <p>{props.label}</p>
            </Html>
            <sphereGeometry args={[0.3]}/>
            <meshStandardMaterial color={clicked ? "blue" : "#30302f"}/>
        </mesh>
    )
}