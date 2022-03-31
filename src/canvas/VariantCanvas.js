import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../components/CameraController';
import { Suspense } from 'react';
import BetaCorona from '../3dcomponents/CoronaVariants/BetaCorona';
import AlphaCorona from '../3dcomponents/CoronaVariants/AlphaCorona';
import DeltaCorona from '../3dcomponents/CoronaVariants/DeltaCorona';
import GammaCorona from '../3dcomponents/CoronaVariants/GammaCorona';

export const VariantCanvas = (props) => {

    const { variantIndex } = props;

    const Scene = () => {
        useThree(({camera}) => {
          camera.position.set(0, 0, 200);
        })
        return null
    }

    const variantModels = [
        <BetaCorona/>,
        <AlphaCorona/>,
        <DeltaCorona/>,
        <GammaCorona/>
    ]

    return (
        <Canvas style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
            <Suspense fallback={null}>
                <Scene/>
                <CameraController/>
                <ambientLight intensity={1}/>
                <directionalLight position={[0, 0, 20]}/>
                {variantModels[variantIndex]}
            </Suspense>
        </Canvas>
    )
}