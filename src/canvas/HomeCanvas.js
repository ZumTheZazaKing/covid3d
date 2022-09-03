import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../components/CameraController';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import Corona from '../3dcomponents/HomeComponents/Corona';
import VariantsHolder from '../3dcomponents/HomeComponents/VariantsHolder';
import SyptomsHolder from '../3dcomponents/HomeComponents/SyptomsHolder';
import StatsHolder from '../3dcomponents/HomeComponents/StatsHolder'
import TimelineHolder from '../3dcomponents/HomeComponents/TimelineHolder';
import Star from '../3dcomponents/HomeComponents/Star';

export const HomeCanvas = () => {
  
  const loaders = ['bb-8','chewi','yoda','dv']

    const Scene = () => {
      useThree(({camera}) => {
        camera.position.set(0,0, 200);
      })
      return null
    }
  
    return (
      <div className={`home canvas`}>
        <Canvas style={{backgroundColor:'#dee0e3'}}>
          <Suspense fallback={
            <Html
              center
              prepend
            >
              <div className={loaders[Math.floor(Math.random()*loaders.length)]}></div>
            </Html>
          }>
            <Scene/>
            <Corona/>
            <VariantsHolder/>
            <SyptomsHolder/>
            <StatsHolder/>
            <TimelineHolder/>
            {Array(250).fill().map(() => <Star/>)}
            <CameraController/>
            <ambientLight intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>
    );
}