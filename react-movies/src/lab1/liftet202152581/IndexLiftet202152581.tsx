import React from 'react'
import { urlLiftat202152581 } from '../../endpoints'
import IndexEntity from '../../utils/IndexEntity'
import { liftiDTO } from './liftet.model'

const IndexLiftet202152581 = () => {
  return (
    <>
            <IndexEntity<liftiDTO>
                url={urlLiftat202152581} createURL="liftet/create" title="Liftat"
                entityName="Liftat202152581"
            >
                {(liftet, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Emertimi</th>
                                <th>DataPT</th>
                                <th>Ndertesa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {liftet?.map(lifti =>
                                <tr key={lifti.id}>
                                    <td>
                                        {buttons(`liftet/edit/${lifti.id}`, lifti.id)}
                                    </td>
                                    <td>
                                        {lifti.emertimi}
                                    </td>
                                    <td>
                                    {lifti.dataPT ? JSON.stringify(lifti.dataPT) : ''}
                                    </td>
                                    <td>
                                        {lifti.ndertesa.emertimi} {/* Accessing shteti data */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
  )
}

export default IndexLiftet202152581
