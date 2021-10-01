import { ReactElement } from 'react';
import { useFetch }  from '../../../customHooks/useFetch';

interface Iapi {
    url: string,
    ts: string,
    apikey: string,
    hash: string,
    limits: string
}

export default function Characters(): ReactElement {

    const characters = useFetch('characters', 10000, '100');
    console.log(characters);


    return (
        <div>
            <h1>Characters :</h1>
            {/* {
                characters.map((c: any) => {
                    return (
                        <div key={c.id}>
                            <h2>{c.name}</h2>
                        </div>
                    )
                })
            } */}
        </div>
    )
}
