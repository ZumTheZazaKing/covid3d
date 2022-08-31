import { Canvas, useThree } from '@react-three/fiber';
import CovidCamController from '../components/CovidCamController';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import CovidInside from '../3dcomponents/CoronaVariants/CovidInside';

const CovidCanvas = () => {;


    const Scene = () => {
      useThree(({camera}) => {
        camera.position.set(0,0, 100);
      })
      return null
    }
  
    return (
      <div className={`home canvas`}>
        <Canvas style={{backgroundColor:'#a0a0a0'}}>
          <Suspense fallback={
            <Html
              center
              prepend
            >
              <h1>LOADING...</h1>
            </Html>
          }>
            <Scene/>
            <CovidInside scale={20}/>
            <CovidCamController/>
            <ambientLight intensity={0.5}/>
            {<directionalLight position={[100,200,0]} intensity={1}/>}
          </Suspense>
        </Canvas>
      </div>
    );
}; export default CovidCanvas;