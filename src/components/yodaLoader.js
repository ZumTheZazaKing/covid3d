import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite'

const YodaLoader = () => {
    return (<div className={css(LoadingStyles.container)}>
        <div className='yoda'></div>
    </div>)
}; export default YodaLoader;