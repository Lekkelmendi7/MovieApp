import React from 'react'
import { urlPlanetet202152581 } from '../../endpoints';
import EditEntity from '../../utils/EditEntity';

import { planetCreationDTO, planetiDTO } from './planets.model';
import PlanetiForm from './PlanetiForm';


const EditPlaneti = () => {
  return (
    <>
    <EditEntity<planetCreationDTO , planetiDTO> 
        url={urlPlanetet202152581} entityName="Planetet202152581"
        indexURL="/planets"
    >
        {(entity, edit) =>
            <PlanetiForm model={entity}
            onSubmit={async value => {
                await edit(value);
            }}
        />
        }
    </EditEntity>
</>
  )
}

export default EditPlaneti
