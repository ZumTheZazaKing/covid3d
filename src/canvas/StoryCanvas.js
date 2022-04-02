import { Canvas } from '@react-three/fiber';
import { css } from 'aphrodite';
import { StoryStyles } from '../styles/StoryStyles';
import { ScrollControls, Scroll } from '@react-three/drei';
import Corona from '../3dcomponents/StoryComponents/Corona';
import Flag from '../3dcomponents/StoryComponents/Flag';
import Star from '../3dcomponents/StoryComponents/Star';

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
                        <Corona/>
                        <Flag/>
                        {Array(400).fill().map(() => <Star/>)}
                    </Scroll>
                    <Scroll html>

                        {/**First Section */}
                        <div
                            style={{
                                top:"25vh",
                                width:"100vw",
                                textAlign:"center",
                                position:"absolute",
                            }}
                        >
                            <h2>Hello, I'm COVID-19</h2>
                        </div>
                        <div
                            style={{
                                top:"70vh",
                                width:"100vw",
                                textAlign:"center",
                                position:"absolute",
                            }}
                        >
                            <h2>Let me tell you my story</h2>
                        </div>


                        {/**Second Section */}
                        <div
                            style={{
                                top:"8vh",
                                left:"100vw",
                                width:"100vw",
                                padding:"20px",
                                position:"absolute",
                            }}
                        >
                            <h2>My Beginning</h2>
                            <br/>
                            <p style={{lineHeight:1.5}}>
                                This reminds me about my first victim. I don't quite remember it very well. <br/>
                                I think it was around 17 November 2019. It was a 55 year old individual <br/>
                                from Hubei province in China. I don't remember much about them, not <br/>
                                even their gender. But those were the good times. It was easy to get <br/>
                                around, from person to person because I was just a new fresh little virus <br/>
                                that no one knew about.
                                <br/><br/>
                                Surprisingly, they noticed my presence around December 2019 at Wuhan, China.<br/>
                                I was worried for a bit but man, humans are stupid. They suspected that I stemmed<br/>
                                from something sold at a wet market in the city. Boy, they were wrong.
                                <br/><br/>
                                After some time, they figured out that I had no relation to the market at all.<br/>
                                Some even started to think I originated in a bat, and I don't really know if<br/>
                                it's wrong or not because I too don't know my origins.
                                <br/><br/>
                                Anyways, it was too late for them. I had already gone out of China as of March 2020<br/>
                                and said "Hello" to the world!

                            </p>
                        </div>
                        

                        {/***Third Section */}
                        <div
                            style={{
                                top:"8vh",
                                left:"200vw",
                                width:"100vw", 
                                padding:"20px",
                                position:"absolute",
                            }}
                        >
                            <h2 style={{textAlign:"right"}}>My Uprising</h2>
                            <br/>
                            <p style={{lineHeight:1.5, textAlign:"right"}}>
                                Ah yes, my uprising. It happened when some organization called WHO<br/>
                                recognized me as a pandemic around March 2020. The fame, the glory.<br/>
                                I was the topic of everyone's lives no matter where they ran to.<br/>
                                I was everywhere on the internet. Ah, the golden days.
                                <br/><br/>
                                But of course, there were also downfalls to my increasing popularity. <br/>
                                The humans had started to become more and more wary of me. Thus, <br/>
                                they took precautions against me which proved to be quite a nuisance to<br/>
                                my spreading influence. I mean, what the heck is social distancing and<br/>
                                why is it so annoying?! They also started putting on some sort of<br/>
                                transparent lotion on themselves and wore masks on their faces.
                                <br/><br/>
                                The situation didn't look too good for me. Thus, I did what anyone would<br/>
                                do. Retaliate. I created different variants of myself and even though<br/>
                                most of them weren't fit for the job, a handful were able to successfully<br/>
                                become threats to humankind. With my Delta variant being the deadliest and my<br/>
                                Omicron variant being the most resilient and most contagious.
                                <br/><br/>
                                How do you like them apples?

                            </p>
                        </div>


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
                                Yes
                            </p>
                        </div>
                        

                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    )
}