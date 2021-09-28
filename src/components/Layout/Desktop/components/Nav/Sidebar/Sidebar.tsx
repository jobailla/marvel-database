import React, { ReactElement } from 'react'
import { LibraryIcon, AscendingIcon } from '@fluentui/react-icons-mdl2';

import './Sidebar.scss'

interface Props {
    
}

export default function Sidebar({}: Props): ReactElement {
    return (
        <div className='sidebar'>
            <div className='sidebar__library'>
                <LibraryIcon />                
            </div>
            <div className='sidebar__separator' />
            <div className='sidebar__ascending'>
                <AscendingIcon />
            </div>
        </div>
    )
}

