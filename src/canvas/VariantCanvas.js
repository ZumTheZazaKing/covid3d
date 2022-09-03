import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useContext } from 'react';
import { Html } from '@react-three/drei';
import BetaCorona from '../3dcomponents/CoronaVariants/BetaCorona';
import AlphaCorona from '../3dcomponents/CoronaVariants/AlphaCorona';
import DeltaCorona from '../3dcomponents/CoronaVariants/DeltaCorona';
import GammaCorona from '../3dcomponents/CoronaVariants/GammaCorona';
import OmicronCorona from '../3dcomponents/CoronaVariants/OmicronCorona';
import { Context } from '../Context';

export const VariantCanvas = (props) => {

    const { variantIndex } = props;
    const { mobile } = useContext(Context)

    const Scene = () => {
        useThree(({camera}) => {
          mobile ? camera.position.set(0, 0, 150) : camera.position.set(0, 0, 200)
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
        <Canvas style={{backgroundColor:"rgba(0,0,0,0.3)", flex:4}}>
            <Suspense fallback={
                <Html
                    center
                    prepend
                >
                    <h2>LOADING...</h2>
                </Html>
            }>
                <Scene/>
                <ambientLight intensity={1}/>
                <directionalLight intensity={0.5} position={[0, 40, 40]}/>
                {variantModels[variantIndex]}
            </Suspense>
        </Canvas>
    )
}