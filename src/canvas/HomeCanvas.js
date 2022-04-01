import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../components/CameraController';
import { Suspense } from 'react';
import Corona from '../3dcomponents/HomeComponents/Corona';
import VariantsHolder from '../3dcomponents/HomeComponents/VariantsHolder';
import SyptomsHolder from '../3dcomponents/HomeComponents/SyptomsHolder';
import Star from '../3dcomponents/Star';

export const HomeCanvas = () => {;

    const Scene = () => {
      useThree(({camera}) => {
        camera.position.set(0, 100, 120);
      })
      return null
    }
  
    return (
      <div className="home canvas">
        <Canvas style={{backgroundColor:'#dee0e3'}}>
          <Suspense fallback={null}>
            <Scene/>
            <Corona/>
            <VariantsHolder/>
            <SyptomsHolder/>
            {Array(400).fill().map(() => <Star/>)}
            <CameraController/>
            <ambientLight intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>
    );
}