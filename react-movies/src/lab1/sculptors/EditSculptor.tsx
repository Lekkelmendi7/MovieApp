import React from 'react'
import {  urlSculptors202152581 } from '../../endpoints';
import SculptorForm from './SculptorForm';
import EditEntity from '../../utils/EditEntity';
import { sculptorCreateDTO, sculptorDTO } from './sculptors.model';


export default function EditSculptor ()  {
    return (
        <>
            <EditEntity<sculptorCreateDTO , sculptorDTO> 
                url={urlSculptors202152581} entityName="Sculptors"
                indexURL="/sculptors"
            >
                {(entity, edit) =>
                    <SculptorForm model={entity}
                    onSubmit={async value => {
                        await edit(value);
                    }}
                />
                }
            </EditEntity>
        </>
    )
}

