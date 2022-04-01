import { HomeCanvas } from "../canvas/HomeCanvas"
import { HomeStyles } from "../styles/HomeStyles";
import { css } from "aphrodite";
import Loading from "../components/Loading";
import { Suspense, useState } from "react";

export const Home = () => {

    const [clicked, setClicked] = useState(false);

    return (
        <div className={css(HomeStyles.wrapper)} onMouseDown={() => setClicked(true)}>
            <Suspense fallback={<Loading />}>
                <h1 className={css(HomeStyles.title)}>A Close Look At COVID-19</h1>
                    <p className={css(HomeStyles.tip, clicked ? HomeStyles.hide : "")}>Click & drag to rotate</p>
                    <p className={css(HomeStyles.tip, clicked ? HomeStyles.hide : "")}>Scroll for zoom</p>
                <HomeCanvas />
            </Suspense>
        </div>
    )
}