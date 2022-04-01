import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import Checkmark from '../3dcomponents/SyptomsComponents/Checkmark';
import Questionmark from '../3dcomponents/SyptomsComponents/Questionmark';
import Exclamationmark from '../3dcomponents/SyptomsComponents/Exclamationmark';

export const SyptomsCanvas = (props) => {

    const { level } = props;

    const Models = [
        <Checkmark/>,
        <Questionmark/>,
        <Exclamationmark/>
    ]

    const Scene = () => {
        useThree(({camera}) => {
          camera.position.set(0, 0, 80);
        })
        return null
    }

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Scene/>
                {Models[level]}
                <ambientLight intensity={0.5}/>
                <directionalLight intensity={1} position={[100, 0, 100]}/>
            </Suspense>
        </Canvas>
    )
}