import React, { ReactElement } from 'react'
import { ChevronLeftIcon } from '@fluentui/react-icons-mdl2';
import './Topbar.scss'

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
                    <li>Characters</li>
                    <li>Story</li>
                </ul>
            </div>
            <div className='topbar__search'>

            </div>
        </div>
    )
}
