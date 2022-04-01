import { HomeCanvas } from "../canvas/HomeCanvas"
import { HomeStyles } from "../styles/HomeStyles";
import { css } from "aphrodite";
import Loading from "../components/Loading";
import { Suspense } from "react";

export const Home = () => {

    return (
        <div className={css(HomeStyles.wrapper)}>
            <Suspense fallback={<Loading />}>
                <h1 className={css(HomeStyles.title)}>A Close Look At COVID-19</h1>
                    <p className={css(HomeStyles.tip)}>Click & drag to rotate</p>
                    <p className={css(HomeStyles.tip)}>Scroll for zoom</p>
                <HomeCanvas />
            </Suspense>
        </div>
    )
}