import { LoadingStyles } from '../styles/LoadingStyles';
import { css } from 'aphrodite'

const DarthLoader = () => {
    return (<div className={css(LoadingStyles.container)}>
        <div className='dv'></div>
    </div>)
}; export default DarthLoader;