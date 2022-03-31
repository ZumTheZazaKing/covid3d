import { VariantStyles } from "../styles/VariantStyles";
import { css } from "aphrodite";
import { Context } from "../Context";
import { useContext, useState } from "react";
import { VariantCanvas } from "../canvas/VariantCanvas";

export const Variants = () => {

    const { currentLanguage } = useContext(Context);
    const goBack = () => {
        window.appHistory.push("/#/")
        setTimeout((() => {window.location.reload()}), 100)
    }

    const [variantIndex, setVariantIndex] = useState(0);

    const goToNextVariant = () => {
        if(variantIndex === currentLanguage.variants.content.length - 1)return;
        setVariantIndex(variantIndex + 1);
    }

    const goToPreviousVariant = () => {
        if(variantIndex === 0)return;
        setVariantIndex(variantIndex - 1);
    }

    return (
        <div className={css(VariantStyles.wrapper)}>
            <div className={css(VariantStyles.container)}>
                <div className={css(VariantStyles.header)}>
                    <button className={css(VariantStyles.backButton)} onClick={goBack}>Back</button>
                    <h1>{currentLanguage.variants.title}</h1><br/>
                </div>
                <div className={css(VariantStyles.content)}>
                    <button onClick={goToPreviousVariant} className={css(VariantStyles.button)}>Previous</button>
                    <div className={css(VariantStyles.mainContent)}>
                        <div className={css(VariantStyles.contentInfo)}>
                            <h2>{currentLanguage.variants.content[variantIndex].name}</h2><br/>
                            <p>First Detection: <b>{currentLanguage.variants.content[variantIndex].first_detection}</b></p><br/>
                            <p>Founded in: <b>{currentLanguage.variants.content[variantIndex].country}</b></p><br/>
                            <p>Pango Lineage: <b>{currentLanguage.variants.content[variantIndex].pango_lineage}</b></p><br/>
                            <p>Spread: <b>{currentLanguage.variants.content[variantIndex].spread}</b></p><br/>
                            <p>Severe Effects: <b>{currentLanguage.variants.content[variantIndex].severe_effects}</b></p>
                        </div>
                        <div className={css(VariantStyles.contentImage)}>
                            <VariantCanvas variantIndex={variantIndex}/>
                        </div>
                    </div>
                    <button onClick={goToNextVariant} className={css(VariantStyles.button)}>Next</button>
                </div>
            </div>
        </div>
    )
}