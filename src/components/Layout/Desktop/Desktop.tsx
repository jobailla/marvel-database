import { ReactElement } from 'react'
import MarvelLogo from '../../../assets/marvel_logo.png'
import Sidebar from './components/Nav/Sidebar'
import Topbar from './components/Nav/Topbar'
import './Desktop.scss'


interface Props {
    children: ReactElement;
}

export default function Desktop(props: Props): ReactElement {

    const { children } = props;

    return (
        <div className='Desktop'>
            <div className='Desktop__logo'>
                <img src={MarvelLogo} alt='marvel_logo' width='50px' />
            </div>
            <div className='Desktop__topbar'>
                <Topbar />
            </div>
            <div className='Desktop__sidebar'>
                <Sidebar />
            </div>
            <div className='Desktop__content'>
                {children}
            </div>
        </div>
    )
}
