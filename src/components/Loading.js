import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite';

export default function Loading () {
    return (<div className={css(LoadingStyles.container)}>
        <div className='wobbling-8'></div>
    </div>)
}