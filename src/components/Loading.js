import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite';

export default function Loading () {
    return (<div className={css(LoadingStyles.container)}>
        <h1>LOADING...</h1>
    </div>)
}