import { Canvas, useThree } from '@react-three/fiber';
import CameraController from './components/CameraController';
import { Suspense } from 'react';
import Corona from './3dcomponents/Corona';
import Star from './3dcomponents/Star';

export const CanvasContainer = () => {;

    const Scene = () => {
      useThree(({camera}) => {
        camera.position.set(0, 0, 120);
      })
      return null
    }
  
    return (
      <div className="canvas">
        <Canvas style={{backgroundColor:'#dee0e3'}}>
          <Suspense fallback={null}>
            <Scene/>
            <Corona/>
            {Array(400).fill().map(() => <Star/>)}
            <CameraController/>
            <ambientLight intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>
    );
}