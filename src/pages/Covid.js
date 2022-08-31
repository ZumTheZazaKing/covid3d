import { TimelineStyles } from "../styles/TimelineStyles";
import { css } from "aphrodite";
import { useEffect } from "react";
import CovidCanvas from "../canvas/CovidCanvas";

export const Covid = () => {

    useEffect(() => {
        document.title = "Covid3D | COVID"
    },[])

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div>
            <button onClick={goBack} className={css(TimelineStyles.backButton)}>Back</button>
            <h1 className={css(TimelineStyles.header)}>COVID</h1>
            <CovidCanvas/>
        </div>
    )
}