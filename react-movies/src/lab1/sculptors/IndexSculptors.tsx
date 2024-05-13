import React from 'react'
import { urlSculptors202152581 } from '../../endpoints'
import IndexEntity from '../../utils/IndexEntity'
import { sculptorDTO } from './sculptors.model'


export default function IndexSculptors() {
    return (
        <>
            <IndexEntity<sculptorDTO>
                url={urlSculptors202152581} createURL="sculptors/create" title="Sculptors"
                entityName="Skulptoret"
            >
                {(sculptors, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Emertimi</th>
                                <th>Data e Lindjes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sculptors?.map(sculptor =>
                                <tr key={sculptor.id}>
                                    <td>
                                        {buttons(`sculptors/edit/${sculptor.id}`, sculptor.id)}
                                    </td>
                                    <td>
                                        {sculptor.name}
                                    </td>
                                    <td>
                                        {sculptor.dataLindjes}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}

