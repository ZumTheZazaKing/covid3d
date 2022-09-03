import { TimelineStyles } from "../styles/TimelineStyles";
import { css } from "aphrodite";
import TimelineCanvas from "../canvas/TimelineCanvas";
import { useEffect, useContext } from "react";
import { HomeStyles } from "../styles/HomeStyles";
import { Context } from "../Context";

export const Timeline = () => {

    const { mobile } = useContext(Context);

    useEffect(() => {
        document.title = "Covid3D | Timeline"
    },[])

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div>
            <button onClick={goBack} className={css(TimelineStyles.backButton)}>Back</button>
            <h1 className={css(TimelineStyles.header)}>Timeline</h1>
           {mobile ? <div>
                <p className={css(HomeStyles.tip)}>Two fingers to move</p>
                <p className={css(HomeStyles.tip)}>One finger to rotate</p>
            </div>
            :
            <div>
                <p className={css(HomeStyles.tip)}>Right click to move</p>
                <p className={css(HomeStyles.tip)}>Left click rotate</p>
            </div>}
            <TimelineCanvas/>
        </div>
    )
}