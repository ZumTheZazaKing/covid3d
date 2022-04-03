import { StatsStyles } from "../styles/StatsStyles";
import { css } from 'aphrodite';

export default function StatsCanvas(){
    return (
        <iframe 
            src="http://threegraphs.com/charts/preview/8958/embed" 
            scrolling="no" 
            frameBorder="0" 
            style={{border:"none"}}
            title="Total Cases"
            className={css(StatsStyles.canvas)}
        />
    )
}