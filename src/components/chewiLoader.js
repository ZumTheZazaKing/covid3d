import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite'

const ChewiLoader = () => {
    return (<div className={css(LoadingStyles.container)}>
        <div className='chewi'></div>
    </div>)
}; export default ChewiLoader;