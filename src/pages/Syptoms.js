import { SyptomsStyles } from "../styles/SyptomsStyles";
import { css } from "aphrodite";
import { SyptomsCanvas } from "../canvas/SyptomsCanvas";

export const Syptoms = () => {

    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    return (
        <div className={css(SyptomsStyles.wrapper)}>
            <button className={css(SyptomsStyles.backButton)} onClick={goBack}>Back</button>
            <h1 className={css(SyptomsStyles.title)}>Syptoms</h1>
            <br/>
            <div className={css(SyptomsStyles.container)}>
                <div className={css(SyptomsStyles.syptomsContext)}>
                    <h2 className={css(SyptomsStyles.mostHeader)}>Most Common Syptoms</h2><br/>
                    - Fever<br/>
                    - Cough<br/>
                    - Tiredness<br/>
                    - Loss of taste and smell
                </div>
                <div className={css(SyptomsStyles.syptomsImage)}>
                <SyptomsCanvas level={0}/>
                </div>
            </div>
            <div className={css(SyptomsStyles.container)}>
                <div className={css(SyptomsStyles.syptomsContext)}>
                    <h2 className={css(SyptomsStyles.lessHeader)}>Less Common Syptoms</h2><br/>
                    - Sore throat<br/>
                    - Headache<br/>
                    - Aches and pains<br/>
                    - diarrhoea<br/>
                    - A rash on skin, or discolouration of fingers or toes<br/>
                    - Red or irritated eyes
                </div>
                <div className={css(SyptomsStyles.syptomsImage)}>
                    <SyptomsCanvas level={1}/>
                </div>
            </div>
            <div className={css(SyptomsStyles.container)}>
                <div className={css(SyptomsStyles.syptomsContext)}>
                    <h2 className={css(SyptomsStyles.seriousHeader)}>Serious Syptoms</h2><br/>
                    - Difficulty breathing or shortness of breath<br/>
                    - Loss of speech or mobility, or confusion<br/>
                    - Chest pain<br/>
                    <br/>
                    Seek immediate medical attention if you have serious symptoms.
                    Always call before visiting your doctor or health facility.
               </div>
                <div className={css(SyptomsStyles.syptomsImage)}>
                    <SyptomsCanvas level={2}/>
                </div>
            </div>
        </div>
    )
}