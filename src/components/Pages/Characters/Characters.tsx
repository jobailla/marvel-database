import { ReactElement } from 'react'
import Gallery from '../../../components/Gallery'

export default function Characters(): ReactElement {

    const parseData = (data: any) => {
        const parsed = data.map((v: any) => {
            return ({
                id: v.id,
                name: v.name,
                image: v.thumbnail.path + '/portrait_fantastic.' + v.thumbnail.extension
            })
        })
        return parsed;
    }

    return (
        <div className='characters'>
            <Gallery path='characters' parseData={parseData} />
        </div>
    )
}
