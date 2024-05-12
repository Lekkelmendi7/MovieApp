import React from 'react'
import { urlPlanetet202152581} from '../../endpoints'
import IndexEntity from '../../utils/IndexEntity'
import { planetiDTO } from './planets.model'


const IndexPlanetet = () => {
  return (
    <>
    <IndexEntity<planetiDTO>
        url={urlPlanetet202152581} createURL="planets/create" title="Planetet"
        entityName="Planetet202152581"
    >
        {(planetet, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {planetet?.map(planeti =>
                        <tr key={planeti.id}>
                            <td>
                                {buttons(`planets/edit/${planeti.id}`, planeti.id)}
                            </td>
                            <td>
                                {planeti.name}
                            </td>
                            <td>
                                {planeti.type}
                            </td>
                        </tr>)}
                </tbody>
            </>}

    </IndexEntity>
</>
  )
}

export default IndexPlanetet
