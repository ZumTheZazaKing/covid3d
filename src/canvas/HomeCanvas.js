import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../components/CameraController';
import { Suspense } from 'react';
import Corona from '../3dcomponents/HomeComponents/Corona';
import Star from '../3dcomponents/Star';
import VariantsButton from '../3dcomponents/HomeComponents/VariantsButton';
import SyptomsButton from '../3dcomponents/HomeComponents/SyptomsButton';

export const HomeCanvas = () => {;

    const Scene = () => {
      useThree(({camera}) => {
        camera.position.set(0, 0, 120);
      })
      return null
    }
  
    return (
      <div className="home canvas">
        <Canvas style={{backgroundColor:'#dee0e3'}}>
          <Suspense fallback={null}>
            <Scene/>
            <Corona/>
            <SyptomsButton/>
            <VariantsButton/>
            {Array(400).fill().map(() => <Star/>)}
            <CameraController/>
            <ambientLight intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>
    );
}