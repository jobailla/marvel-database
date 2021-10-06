import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { ReactElement } from 'react';
import { useFetch } from '../../customHooks/useFetch';
import './Gallery.scss';

interface Props {
    path: string;
    parseData: (data: any) => ReactElement;
}

interface Idata {
    data: any[];
    error: boolean;
    errorMessage: string | null;
    loading: boolean;
    total: number;
}


export default function Gallery({ path, parseData }: Props): ReactElement {
    const timeout = 10000;

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
    const gallery = assembleData(total);

    return (
        <div className='gallery'>
            {
                gallery ?
                    gallery.map((character: any, i: number) => {
                        return (
                            <div className='gallery__cards' key={i + '_' + character.name + '_' + character.id}>
                                <div className='gallery__cards__image'>
                                    <img src={character.image} alt={character.name} />
                                </div>
                                <div className='gallery__cards__name'>
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
