import { StatsStyles } from "../styles/StatsStyles";
import { css } from 'aphrodite';
import { Suspense } from "react";
import { Html } from "@react-three/drei";

export default function StatsCanvas(){
    return (
        <Suspense fallback={
            <Html
                center
                prepend
            >
                <h2>LOADING...</h2>
            </Html>
        }>
            <iframe 
                src="http://threegraphs.com/charts/preview/8958/embed" 
                scrolling="no" 
                frameBorder="0" 
                style={{border:"none"}}
                title="Total Cases"
                className={css(StatsStyles.canvas)}
        />
        </Suspense>
    )
}