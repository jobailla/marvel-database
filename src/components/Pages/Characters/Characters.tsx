import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { ReactElement } from 'react';
import { useFetch } from '../../../customHooks/useFetch';
import './Characters.scss';

interface Idata {
    data: any[];
    error: boolean;
    errorMessage: string | null;
    loading: boolean;
    total: number;
}

export default function Characters(): ReactElement {
    const timeout = 10000;
    const path = 'characters'

    const parseData = (data: any) => {
        const parsed = data.map((v: any) => {
            return ({
                id: v.id,
                name: v.name,
                image: v.thumbnail.path + '/portrait_xlarge.' + v.thumbnail.extension
            })
        })
        return parsed;
    }

    const assembleData = (total: number) => {
        let assembled = [];
        for (let i = 0; i <= total; i++) {
             const fragment = localStorage.getItem(path + '_' + i.toString());
                if (fragment) {
                    assembled.push(JSON.parse(fragment));
                }
        }
        return assembled.flat();
    }

    const { total }: Idata = useFetch(path, parseData, timeout);
    const characters = assembleData(total);

    return (
        <div className='characters'>
            {
                characters ?
                    characters.map((character: any) => {
                        return (
                            <div className='characters__cards' key={character.id}>
                                <div className='characters__cards__image'>
                                    <img src={character.image} alt={character.name} />
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
