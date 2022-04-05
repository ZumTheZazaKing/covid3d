import { SymptomsStyles } from "../styles/SymptomsStyles";
import { css } from "aphrodite";
import { SymptomsCanvas } from "../canvas/SymptomsCanvas";
import { useEffect } from "react";

export const Symptoms = () => {

    useEffect(() => {
        document.title = "Covid3D | Symptoms"
    },[])

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div className={css(SymptomsStyles.wrapper)}>
            <button className={css(SymptomsStyles.backButton)} onClick={goBack}>Back</button>
            <h1 className={css(SymptomsStyles.title)}>The Symptoms of COVID-19</h1>
            <SymptomsCanvas/>
        </div>
    )
}