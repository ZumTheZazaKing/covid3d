import { Canvas } from '@react-three/fiber';
import { SymptomsStyles } from '../styles/SymptomsStyles';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import Star from '../3dcomponents/HomeComponents/Star';
import { ScrollControls, Scroll } from '@react-three/drei';
import { css } from 'aphrodite';

export const SymptomsCanvas = () => {

    return (
        <div className={css(SymptomsStyles.canvas)}>
            <Canvas>
                <Suspense fallback={
                    <Html
                        center
                        prepend
                    >
                        <h2>LOADING...</h2>
                    </Html>
                }>
                    <ScrollControls
                        pages={3}
                    >

                        <Scroll>
                            {Array(400).fill().map(() => <Star/>)}
                        </Scroll>

                        <Scroll html>

                        </Scroll>
                        
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    )
}