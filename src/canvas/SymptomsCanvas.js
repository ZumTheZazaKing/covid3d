import { Canvas } from '@react-three/fiber';
import { SymptomsStyles } from '../styles/SymptomsStyles';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import Checkmark from '../3dcomponents/SyptomsComponents/Checkmark';
import Questionmark from '../3dcomponents/SyptomsComponents/Questionmark';
import Exclamationmark from '../3dcomponents/SyptomsComponents/Exclamationmark';
import Humanbody from '../3dcomponents/SyptomsComponents/Humanbody';
import Star from '../3dcomponents/HomeComponents/Star';
import { ScrollControls, Scroll } from '@react-three/drei';
import { css } from 'aphrodite';

export const SymptomsCanvas = () => {

    const middleH = (window.innerHeight * 3) / 2;

    return (
        <div className={css(SymptomsStyles.canvas)}>
            <Canvas style={{backgroundColor:'#b3b3b3'}}>
                <ambientLight intensity={0.5} />
                <directionalLight intensity={1}/>
                <Suspense fallback={
                    <Html
                        center
                        prepend
                    >
                        <h2>LOADING...</h2>
                    </Html>
                }>
                    <ScrollControls
                        pages={2}
                    >

                        <Scroll>
                            <Humanbody scale={10} position={[3,-16.5,-1]}/>
                            {Array(400).fill().map(() => <Star/>)}
                        </Scroll>

                        <Scroll html>

                            
                            {/**First Section */}
                            <div style={{
                                position:"absolute",
                                width:"50vw",
                                height:"90vh",
                                top:"10vh",
                                display: 'flex',
                                alignItems:"center",
                                justifyContent: 'center',
                                flexDirection: 'column',
                                padding:"100px"
                            }}>
                                <p className={css(SymptomsStyles.list)}>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Fever</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Cough</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Tiredness</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Loss of Taste and Smell</span><br/>
                                    <span className={css(SymptomsStyles.seriousTitle)}>- Difficulty breathing or shortness of breath</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Red or irritated eyes</span><br/>
                                    <span className={css(SymptomsStyles.lessTitle)}>- Sore Throat</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Headache</span><br/>
                                </p>
                            </div>

                            {/**Second Section */}
                            <div style={{
                                position:"absolute",
                                width:"50vw",
                                height:"100vh",
                                top:"100vh",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                padding:"100px"
                            }}>
                                <p className={css(SymptomsStyles.list)}>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Aches and Pains</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- Diarrhoea</span><br/>
                                    <span className={css(SymptomsStyles.mostTitle)}>- A rash on skin, or discolouration of fingers or toes</span><br/>
                                    <span className={css(SymptomsStyles.seriousTitle)}>- Loss of speech or mobility, or confusion</span><br/>
                                    <span className={css(SymptomsStyles.seriousTitle)}>- Chest Pain</span><br/>
                                </p>
                            </div>
                        </Scroll>
                        
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    )
}