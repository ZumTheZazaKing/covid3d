import { Suspense } from "react";
import { Html } from "@react-three/drei";
import { Canvas, useThree,} from '@react-three/fiber';
import Star from '../3dcomponents/HomeComponents/Star';
import StatsModel from "../3dcomponents/StatsComponents/StatsModel";
import CovidCamController from "../components/CovidCamController";

export default function StatsCanvas(){

    const Scene = () => {
        useThree(({camera}) => {
          camera.position.set(0,0, 1.2);
        })
        return null
    }

    return (
      <div className="canvas">
        <Canvas style={{backgroundColor:'#dee0e3'}}>
          <Suspense fallback={
            <Html
              center
              prepend
            >
              <div className="wobbling-8"></div>
            </Html>
          }>
            <Scene/>
            {Array(250).fill().map(() => <Star/>)}
            <StatsModel/>
            <CovidCamController/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[20,20,10]} intensity={1}/>
          </Suspense>
        </Canvas>
      </div>
    )
}