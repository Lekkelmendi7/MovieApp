import React from 'react'
import { urlNdertesat202152581 } from '../../endpoints'
import IndexEntity from '../../utils/IndexEntity'
import { ndertesaDTO } from './ndertesat.model'

const IndexNdertesat202152581 = () => {
    return (
        <>
            <IndexEntity<ndertesaDTO>
                url={urlNdertesat202152581} createURL="ndertesat/create" title="Ndertesat"
                entityName="Ndertesat202152581"
            >
                {(ndertesat, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Emertimi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ndertesat?.map(ndertesa =>
                                <tr key={ndertesa.id}>
                                    <td>
                                        {buttons(`ndertesat/edit/${ndertesa.id}`, ndertesa.id)}
                                    </td>
                                    <td>
                                        {ndertesa.emertimi}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}

export default IndexNdertesat202152581
