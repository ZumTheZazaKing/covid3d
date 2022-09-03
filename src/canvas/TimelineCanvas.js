import { Canvas } from "@react-three/fiber"
import { css } from "aphrodite";
import { TimelineStyles } from "../styles/TimelineStyles";
import TrackballController from "../components/TrackballController";
import Timeline from "../3dcomponents/TimelineComponents/Timeline";
import Event from "../3dcomponents/TimelineComponents/Event";
import StartEvent from "../3dcomponents/TimelineComponents/StartEvent";
import EndEvent from "../3dcomponents/TimelineComponents/EndEvent";
import Star from '../3dcomponents/TimelineComponents/Star';
import { Suspense } from "react";
import { Html } from '@react-three/drei';

export default function TimelineCanvas(){

    return (
        <div className={css(TimelineStyles.canvas)}>
            <Canvas>
                <Suspense fallback={
                    <Html
                        center
                        prepend
                    >
                        <div className='wobbling-8'></div>
                    </Html>
                }>
                    <TrackballController min={2} max={8}/>
                    <ambientLight/>
                    <directionalLight position={[10, 0, 20]}/>
                    <Timeline position={[24,0,0]} rotation={[0,0,20.42]}/>
                    {Array(600).fill().map(() => <Star/>)}

                    {/**The Events Components */}
                    <StartEvent/>
                    <Event
                        left
                        label="Late 2019"
                        date="December 31, 2019"
                        context="The World Health Organization China Country Office is informed of a number cases of pneumonia of unknown etiology (unknown cause) detected in Wuhan, Hubei Province. All cases connected to the Huanan Seafood Wholesale Market in Wuhan." 
                    />
                    <Event
                        label="Early 2020"
                        position={[2,0,0]}
                        left
                        date="January 7, 2020"
                        context="Chinese authorities identify and isolate a novel coronavirus as the causative agent of the outbreak" 
                    />
                    <Event
                        position={[4,0,0]}
                        date="January 21, 2020"
                        context="CDC artists Alissa Eckert and Dan Higgins create “an identity” for the novel coronavirus by designing the iconic red and white virus image." 
                    />
                    <Event
                        left
                        position={[6,0,0]}
                        date="January 22, 2020"
                        context="The World Health Organization confirms human-to-human spread of the novel coronavirus." 
                    />
                    <Event
                        position={[8,0,0]}
                        date="January 31, 2020"
                        context="The World Health Organization International Health Regulation Emergency Committee reconvenes and declares the coronavirus outbreak a Public Health Emergency of International Concern."
                    />
                    <Event
                        position={[10,0,0]}
                        date="March 11, 2020"
                        context="The World Health Organization declares COVID-19 a pandemic."
                    />
                    <Event
                        position={[12,0,0]}
                        date="March 16, 2020"
                        context="CDC launches Clara bot, a COVID-19 symptom checker, on its website."
                    />
                    <Event
                        left
                        position={[14,0,0]}
                        date="April 10, 2020"
                        context="The U.S. surpasses Italy as the global leader for reported deaths due to COVID-19 (23,036 deaths)."
                    />
                    <Event
                        label="Mid 2020"
                        position={[16,0,0]}
                        date="May 28, 2020"
                        context="United States coronavirus (COVID-19) death toll surpasses 100,000."
                    />
                    <Event
                        left
                        position={[18,0,0]}
                        date="June 8, 2020"
                        context="The World Bank states that COVID-19 will plunge the Global Economy into the worst recession since World War II."
                    />
                    <Event
                        position={[20,0,0]}
                        date="July 23, 2020"
                        context="CDC releases new science-based resources and tolls for school administrators, teachers, parents, guardians, and caregivers for safe school reopening."
                    />
                    <Event
                        left
                        label="Late 2020"
                        position={[22,0,0]}
                        date="September 22, 2020"
                        context="United States coronavirus (COVID-19) death toll surpasses 200,000."
                    />
                    <Event
                        position={[24,0,0]}
                        date="October 2, 2020"
                        context="President Trump tests positive for the coronavirus."
                    />
                    <Event
                        position={[26,0,0]}
                        date="October 7, 2020"
                        context="New Zealand declares itself virus free."
                    />
                    <Event
                        left
                        position={[28,0,0]}
                        date="November 13, 2020"
                        context="Increased outbreaks are reported across the country due to large gatherings for Halloween."
                    />
                    <Event
                        position={[30,0,0]}
                        date="December 14 2020"
                        context="United States coronavirus (COVID-19) death toll surpasses 300,000."
                    />
                    <Event
                        left
                        position={[32,0,0]}
                        date="December 31, 2020"
                        context="One year anniversary of first reported case to WHO."
                    />
                    <Event
                        label="Early 2021"
                        position={[34,0,0]}
                        date="January 18, 2021"
                        context="U.S COVID-19 death toll surpasses 400,000."
                    />
                    <Event
                        left
                        position={[36,0,0]}
                        date="January 26, 2021"
                        context="Worldwide COVID-19 cases surpass 100 million."
                    />
                    <Event
                        position={[38,0,0]}
                        date="February 21, 2021"
                        context="U.S.COVID-19 death toll surpasses 500,000."
                    />
                    <Event
                        left
                        label="Mid 2021"
                        position={[40,0,0]}
                        date="June 1, 2021"
                        context="The Delta variant, first identified in India in late 2020, becomes the dominant variant in the U.S. The variant kicks off a third wave of infections during the summer of 2021."
                    />
                    <Event
                        position={[42,0,0]}
                        date="August 6, 2021"
                        context="CDC study shows that among people previously infected with COVID-19, reinfection was less than half as likely among those who were vaccinated after their first infection."
                    />
                    <Event
                        left
                        position={[44,0,0]}
                        date="August 30, 2021"
                        context="ACIP recommends Pfizer-BioNTech's vaccine for people ages 16 years and older."
                    />
                    <Event
                        label="Late 2021"
                        position={[46,0,0]}
                        date="November 26, 2021"
                        context="World Health Organization classifies a new variant, Omicron, as a variant of concern after it was first reported by scientists in South Africa. The variant has several mutations in the spike protein that concern scientists around the world."
                    />
                    <EndEvent/>
                </Suspense>
            </Canvas>
        </div>
    )
}