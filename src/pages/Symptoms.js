import { SymptomsStyles } from "../styles/SymptomsStyles";
import { css } from "aphrodite";
import { SymptomsCanvas } from "../canvas/SymptomsCanvas";
import { useEffect, useContext } from "react";
import { Context } from "../Context";

export const Symptoms = () => {

    const { mobile } = useContext(Context);

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
            <div className={css(SymptomsStyles.title)}>
                {mobile ? <h3><br/>The Symptoms of COVID-19</h3> : <h1>The Symptoms of COVID-19<br/></h1>}
                {mobile ?
                <h4>
                    <span className={css(SymptomsStyles.mostTitle)}>Most Common</span>,
                    <span className={css(SymptomsStyles.lessTitle)}>Less Common</span>, 
                    <span className={css(SymptomsStyles.seriousTitle)}>Serious</span>
                 </h4>
                :<h3>
                    <span className={css(SymptomsStyles.mostTitle)}>Most Common</span>,
                    <span className={css(SymptomsStyles.lessTitle)}>Less Common</span>, 
                    <span className={css(SymptomsStyles.seriousTitle)}>Serious</span>
                </h3>}
            </div>
            <SymptomsCanvas/>
        </div>
    )
}