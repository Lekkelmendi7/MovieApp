import React from 'react'
import { urlNdertesat202152581 } from '../../endpoints';
import NdertesaForm202152581 from './NdertesaForm202152581';
import EditEntity from '../../utils/EditEntity';
import { ndertesaCreationDTO, ndertesaDTO } from './ndertesat.model';

const EditNdertesa202152581 = () => {
    return (
        <>
            <EditEntity<ndertesaCreationDTO , ndertesaDTO> 
                url={urlNdertesat202152581} entityName="Ndertesat202152581"
                indexURL="/ndertesat"
            >
                {(entity, edit) =>
                    <NdertesaForm202152581 model={entity}
                    onSubmit={async value => {
                        await edit(value);
                    }}
                />
                }
            </EditEntity>
        </>
    )
}

export default EditNdertesa202152581
