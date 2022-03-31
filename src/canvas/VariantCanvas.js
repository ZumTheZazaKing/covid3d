import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../components/CameraController';
import { Suspense } from 'react';
import BetaCorona from '../3dcomponents/BetaCorona';

export const VariantCanvas = () => {
    const Scene = () => {
        useThree(({camera}) => {
          camera.position.set(0, 0, 200);
        })
        return null
    }

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Scene/>
                <CameraController/>
                <ambientLight intensity={0.5}/>
                <BetaCorona/>
            </Suspense>
        </Canvas>
    )
}