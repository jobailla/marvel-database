import { ReactElement } from 'react';
import './Search.scss';

export default function Search(): ReactElement {
    return (
        <div className='search'>
            <input className='search__input' type="text" placeholder="Search comics..." />
        </div>
    )
}
