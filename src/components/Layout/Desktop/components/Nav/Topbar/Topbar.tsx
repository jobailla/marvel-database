import React, { ReactElement } from 'react'
import { ChevronLeftIcon } from '@fluentui/react-icons-mdl2';
import './Topbar.scss'
import Search from '../Search';
import { Link } from 'react-router-dom';

interface Props {

}

export default function Topbar({ }: Props): ReactElement {
    return (
        <div className='topbar'>
            <div className='topbar__return'>
                <ChevronLeftIcon className='topbar__return__chevron'/>
            </div>
            <div className='topbar__category'>
                <ul>
                    <li><Link to='/characters'>Characters</Link></li>
                    <li><Link to='/comics'>Comics</Link></li>
                </ul>
            </div>
            <div className='topbar__search'>
                <Search />
            </div>
        </div>
    )
}
