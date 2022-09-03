import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite'

const BB8Loader = () => {
    return (<div className={css(LoadingStyles.container)}>
        <div className='bb-8'></div>
    </div>)
}; export default BB8Loader;