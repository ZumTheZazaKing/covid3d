import { HomeCanvas } from "../canvas/HomeCanvas"
import { HomeStyles } from "../styles/HomeStyles";
import { css } from "aphrodite";
import Loading from "../components/Loading";
import { Suspense, useContext } from "react";
import { Context } from "../Context";

export const Home = () => {

    const { mobile } = useContext(Context);

    return (
        <div className={css(HomeStyles.wrapper)}>
            <Suspense fallback={<Loading />}>
                {mobile ? 
                <h2 className={css(HomeStyles.title)}>A Close Look At COVID-19</h2> : 
                <h1 className={css(HomeStyles.title)}>A Close Look At COVID-19</h1>}
               {window.innerWidth < 600 ? 
                <div>
                    <p className={css(HomeStyles.tip)}>Touch & drag to rotate</p>
                    <p className={css(HomeStyles.tip)}>Pinch for zoom</p>
                </div>
               : 
               <div>
                    <p className={css(HomeStyles.tip)}>Click & drag to rotate</p>
                    <p className={css(HomeStyles.tip)}>Scroll for zoom</p>
                </div>}
                <HomeCanvas />
            </Suspense>
        </div>
    )
}