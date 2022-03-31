import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Checkmark from '../3dcomponents/SyptomsComponents/Checkmark';

export const SyptomsCanvas = (props) => {

    const { level } = props;

    const Models = [
        <Checkmark/>
    ]

    const Scene = () => {
        useThree(({camera}) => {
          camera.position.set(0, 0, 120);
        })
        return null
    }

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Scene/>
                {Models[level]}
                <ambientLight intensity={0.5}/>
            </Suspense>
        </Canvas>
    )
}