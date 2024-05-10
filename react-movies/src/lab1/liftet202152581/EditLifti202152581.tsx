import { useEffect, useState } from 'react'
import { urlLiftat202152581, urlNdertesat202152581 } from '../../endpoints';
import EditEntity from '../../utils/EditEntity';

import {  ndertesaDTO } from '../ndertesat202152581/ndertesat.model';
import LiftiForm202152581 from './LiftiForm202152581';
import { liftiCreationDTO, liftiDTO } from './liftet.model';
import axios from 'axios';


const EditLifti202152581 = () => {
  const [ndertesat, setNdertesat] = useState<ndertesaDTO[]>([]);

  useEffect(() => {
      axios.get(`${urlNdertesat202152581}/`)
          .then(response => {
              setNdertesat(response.data);
          })
          .catch(error => {
              console.error('Error fetching ndertesat:', error);
          });
  }, []);
  return (
    <>
    <EditEntity<liftiCreationDTO , liftiDTO> 
        url={urlLiftat202152581} entityName="Liftat202152581"
        indexURL="/liftet"
    >
        {(entity, edit) =>
            <LiftiForm202152581 model={entity}
            onSubmit={async value => {
                await edit(value);
            }}
            ndertesat={ndertesat}
            ndertesaId={entity.ndertesaId}
        />
        }
    </EditEntity>
</>
  )
}

export default EditLifti202152581
