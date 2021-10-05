import { AscendingIcon, LibraryIcon } from '@fluentui/react-icons-mdl2';
import React, { ReactElement } from 'react';
import './Sidebar.scss';

export default function Sidebar(): ReactElement {
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

