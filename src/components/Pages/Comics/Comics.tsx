import React, { ReactElement } from 'react'
import Gallery from '../../Gallery'

export default function Comics(): ReactElement {
  const parseData = (data: any) => {
        const parsed = data.map((v: any) => {
            return ({
                id: v.id,
                name: v.title,
                image: v.thumbnail.path + '/portrait_fantastic.' + v.thumbnail.extension
            })
        })
        return parsed;
    }


    return (
        <div>
            <Gallery path='comics' parseData={parseData} />
        </div>
    )
}
