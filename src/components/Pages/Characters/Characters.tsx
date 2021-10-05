import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { ReactElement } from 'react';
import { useFetch } from '../../../customHooks/useFetch';
import './Characters.scss';

export default function Characters(): ReactElement {
    const timeout = 10000;
    const data = useFetch('characters', timeout); 
    const characters = data.data

    console.log(data)
    // localStorage.setItem('characters', JSON.stringify(characters.flat()));

    return (
        <div className='characters'>
            {
                characters ?
                    characters.map((character: any) => {
                        return (
                            <div className='characters__cards' key={character.id}>
                                <div className='characters__cards__image'>
                                    <img src={character.thumbnail.path + '/portrait_xlarge.' + character.thumbnail.extension} alt={character.name} />
                                </div>
                                <div className='characters__cards__name'>
                                    <h2>{character.name}</h2>
                                </div>
                            </div>
                        )
                    })
                    : <Spinner size={SpinnerSize.large} />
            }
        </div>
    )
}
