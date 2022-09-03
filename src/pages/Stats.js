import { StatsStyles } from "../styles/StatsStyles";
import { css } from 'aphrodite'
import StatsCanvas from "../canvas/StatsCanvas";
import { useEffect, useContext } from "react";
import { Context } from "../Context";

export const Stats = () => {

    const { mobile } = useContext(Context);

    useEffect(() => {
        document.title = "Covid3D | Stats"
    },[])

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div className={css(StatsStyles.wrapper)}>
            <button onClick={goBack} className={css(StatsStyles.backButton)}>Back</button>
            {mobile ? 
            <h2 className={css(StatsStyles.header)}>Stats for COVID-19 Cases (2020-)</h2>:
            <h1 className={css(StatsStyles.header)}>Stats for COVID-19 Cases (2020-)</h1>}
            <div className={css(StatsStyles.blocker)}><b>Last Updated: 20 August 2022</b></div>
            <StatsCanvas/>
        </div>
    )
}