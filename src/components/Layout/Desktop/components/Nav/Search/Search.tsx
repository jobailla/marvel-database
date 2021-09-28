import React, { ReactElement } from 'react'
import { SearchIcon } from '@fluentui/react-icons-mdl2';
import './Search.scss'

interface Props {

}

export default function Search({ }: Props): ReactElement {
    return (
        <div className='search'>
            <input className='search__input' type="text" placeholder="Search comics..." />
        </div>
    )
}
