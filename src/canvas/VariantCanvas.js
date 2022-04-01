import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import BetaCorona from '../3dcomponents/CoronaVariants/BetaCorona';
import AlphaCorona from '../3dcomponents/CoronaVariants/AlphaCorona';
import DeltaCorona from '../3dcomponents/CoronaVariants/DeltaCorona';
import GammaCorona from '../3dcomponents/CoronaVariants/GammaCorona';
import OmicronCorona from '../3dcomponents/CoronaVariants/OmicronCorona';

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
        <GammaCorona/>,
        <OmicronCorona/>
    ]

    return (
        <Canvas style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
            <Suspense fallback={null}>
                <Scene/>
                <ambientLight intensity={1}/>
                <directionalLight position={[0, 0, 20]}/>
                {variantModels[variantIndex]}
            </Suspense>
        </Canvas>
    )
}