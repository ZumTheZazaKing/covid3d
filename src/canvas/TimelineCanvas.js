import { Canvas } from "@react-three/fiber"
import { css } from "aphrodite";
import { TimelineStyles } from "../styles/TimelineStyles";
import TrackballController from "../components/TrackballController";

export default function TimelineCanvas(){
    return (
        <div className={css(TimelineStyles.canvas)}>
            <Canvas>
                <TrackballController/>
                <mesh>
                    <boxGeometry args={[1,1,1]}/>
                    <meshBasicMaterial color="grey"/>    
                </mesh>
            </Canvas>
        </div>
    )
}