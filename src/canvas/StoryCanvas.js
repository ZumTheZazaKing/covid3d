import { Canvas } from '@react-three/fiber';
import { css } from 'aphrodite';
import { StoryStyles } from '../styles/StoryStyles';
import { ScrollControls, Scroll } from '@react-three/drei';
import Corona from '../3dcomponents/StoryComponents/Corona';
import Flag from '../3dcomponents/StoryComponents/Flag';
import Star from '../3dcomponents/StoryComponents/Star';
import Stonks from '../3dcomponents/StoryComponents/Stonks';
import Fist from '../3dcomponents/StoryComponents/Fist';
import Vaccine from '../3dcomponents/StoryComponents/Vaccine';
import Trophy from '../3dcomponents/StoryComponents/Trophy';

export default function StoryCanvas(){

    return (
        <div className={css(StoryStyles.canvas)}>
            <Canvas>
                <ScrollControls
                    damping={4}
                    pages={6}
                    horizontal
                >
                    <Scroll>
                        <ambientLight />
                        {/**Model for Section 1 */}
                        <Corona/>

                        {/**Model for Section 2 */}
                        <Flag/>

                        {/**Model for Section 3 */}
                        <Stonks/>

                        {/**Model for Section 4 */}
                        <Fist/>

                        {/**Model for Section 5 */}
                        <Vaccine/>

                        {/**Model for Section 6 */}
                        <pointLight intensity={1} position={[65, 0, 1]} distance={10}/>
                        <Trophy/>

                        {Array(400).fill().map(() => <Star/>)}
                    </Scroll>
                    <Scroll html>

                        


                        
                        

                        


                        {/***Fourth Section */}
                        <div
                            style={{
                                top:"8vh",
                                left:"300vw",
                                width:"100vw", 
                                padding:"20px",
                                position:"absolute",
                            }}
                        >
                            <h2>My Supporters</h2>
                            <br/>
                            <p style={{lineHeight:1.5}}>
                                Apparently, there were some humans who liked the 'apples' I gave them<br/>
                                and have grown quite fond of me. Well, I don't really know actually.<br/>
                                It's only my assumption. I assume that is the case because there are humans<br/>
                                who go against the other humans called 'authorities' and not take the <br/>
                                precautions these authorities have suggested.
                                <br/><br/>
                                These humans would avoid wearing the transparent lotion and show a sign of<br/>
                                despise when told to wear a mask. Not only that, they also touch with one another<br/>
                                including those with my clones residing within. Fantastic!
                                <br/><br/>
                                As a result, my clones were able to spread more quickly and easily among the<br/>
                                humans including those who took precautions. I'm grateful to those kind and<br/>
                                supportive humans who helped me in my growth. They will be remembered.
                            </p>
                        </div>


                        {/**Fifth Section */}
                        <div
                            style={{
                                top:"8vh",
                                left:"400vw",
                                width:"100vw", 
                                padding:"20px",
                                position:"absolute",
                            }}
                        >
                            <h2>My Problems</h2>
                            <br/>
                            <p style={{lineHeight:1.5}}>
                                As I stayed around for quite some time, the humans had created something<br/>
                                that would stagnant and sometimes reverse my growth. Vaccines. As of March 2021,<br/>
                                a large portion of humanity had taken those vaccines and I can say, it was<br/>
                                a real pain in the spike protein. Their bodies started to beat up my<br/>
                                clones more properly and thoroughly to the point where infection was <br/>
                                troublesome.
                                <br/><br/>
                                As of December 2021, my Omicron variant emerged with the sole purpose of<br/>
                                being more resistant to those darn vaccines. At first glance it was a success.<br/>
                                It spreaded like wildfire among the humans as it took the air took its advantage<br/>
                                although the effects it had on humans were less severe than my other variants.<br/>
                                But the humans are smart and even my Omicron variant wasn't enough. The humans<br/>
                                counterattacked with something called boosters.
                                <br/><br/>
                                These booters seemed to boost the human bodies which were already enhanced <br/>
                                with the vaccines. Of course, it was a real pain to deal with. Why must I face<br/>
                                these trials I thought to myself. Oh well, it didn't matter anyways. No matter<br/>
                                how hard they try, the humans will never be able to purge me. In fact,<br/>
                                I've already integrated successfully with their daily lives. All that's left<br/>
                                is for them to declare it.
                            </p>
                        </div>


                        {/**Sixth Section */}
                        <div
                            style={{
                                top:"8vh",
                                left:"500vw",
                                width:"100vw", 
                                padding:"20px",
                                position:"absolute",
                                textAlign:"right"
                            }}
                        >
                            <h2>My Conclusion</h2>
                            <br/>
                            <p style={{lineHeight:1.5}}>
                                In the end, the humans were able to realize their flaws and gave up on<br/>
                                trying to wipe me out. Instead, they did something I was waiting for a<br/>
                                long time. They started recognizing me as an endemic. Finally, our fighting<br/> 
                                would end and we would live happily together for the rest of our lives.<br/>
                                Although some countries are still in the process, it will happen slowly<br/>
                                but surely. Soon enough, I'll be normal as my distant cousin, the Flu.
                            </p>
                        </div>
                        

                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    )
}