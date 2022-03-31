import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite';

export default function MobileWarn(){
    return (
        <div className={css(LoadingStyles.container)}>
            <h1>Please use a larger screen<br/>(1000px x 600px)</h1>
        </div>
    )
}