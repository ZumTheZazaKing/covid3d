import StoryCanvas from "../canvas/StoryCanvas";
import { StoryStyles } from "../styles/StoryStyles";
import { css } from "aphrodite";

export const Story = () => {

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div style={{padding:"10px", color:"lightgrey"}}>
            <button className={css(StoryStyles.backButton)} onClick={goBack}>Back</button>
            <h1 className={css(StoryStyles.title)}>The Story of COVID-19</h1>
            <StoryCanvas/>
        </div>
    )
}