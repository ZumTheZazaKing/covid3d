import { Canvas } from '@react-three/fiber';
import { SymptomsStyles } from '../styles/SymptomsStyles';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import Checkmark from '../3dcomponents/SyptomsComponents/Checkmark';
import Questionmark from '../3dcomponents/SyptomsComponents/Questionmark';
import Exclamationmark from '../3dcomponents/SyptomsComponents/Exclamationmark';
import Star from '../3dcomponents/HomeComponents/Star';
import { ScrollControls, Scroll } from '@react-three/drei';
import { css } from 'aphrodite';

export const SymptomsCanvas = () => {

    return (
        <div className={css(SymptomsStyles.canvas)}>
            <Canvas>
                <ambientLight intensity={0.5} />
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
                            <Checkmark />
                            <Questionmark/>
                            <Exclamationmark/>
                            {Array(400).fill().map(() => <Star/>)}
                        </Scroll>

                        <Scroll html>

                            
                            {/**First Section */}
                            <div style={{
                                position:"absolute",
                                width:"100vw",
                                height:"90vh",
                                top:"10vh",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}>
                                <h1 className={css(SymptomsStyles.mostTitle)}>
                                    Most Common Symptoms
                                </h1><br/>
                                <p className={css(SymptomsStyles.list)}>
                                    - Fever<br/>
                                    - Cough<br/>
                                    - Tiredness<br/>
                                    - Loss of Taste and Smell
                                </p>
                            </div>

                            {/**Second Section */}
                            <div style={{
                                position:"absolute",
                                width:"100vw",
                                height:"100vh",
                                top:"100vh",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}>
                                <h1 className={css(SymptomsStyles.lessTitle)}>
                                    Less Common Symptoms
                                </h1><br/>
                                <p className={css(SymptomsStyles.list)}>
                                    - Sore Throat<br/>
                                    - Headache<br/>
                                    - Aches and Pains<br/>
                                    - Diarrhoea<br/>
                                    - A rash on skin, or discolouration of fingers or toes<br/>
                                    - Red or irritated eyes
                                </p>
                            </div>

                            {/**Third Section */}
                            <div style={{
                                position:"absolute",
                                width:"100vw",
                                height:"100vh",
                                top:"200vh",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}>
                                <h1 className={css(SymptomsStyles.seriousTitle)}>
                                    Serious Symptoms
                                </h1><br/>
                                <p className={css(SymptomsStyles.list)}>
                                    - Difficulty breathing or shortness of breath<br/>
                                    - Loss of speech or mobility, or confusion<br/>
                                    - Chest Pain<br/>
                                </p>
                            </div>
                        </Scroll>
                        
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    )
}