import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import DisplayingErrors from '../../utils/DisplayingErrors';


import { ndertesaDTO } from '../ndertesat202152581/ndertesat.model';
import LiftiForm202152581 from './LiftiForm202152581';
import { urlLiftat202152581, urlNdertesat202152581 } from '../../endpoints';
import { liftiCreationDTO } from './liftet.model';

const CreateLifti202152581 = () => {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [ndertesat, setNdertesat] = useState<ndertesaDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlNdertesat202152581}`)
      .then(response => {
        setNdertesat(response.data);
      })
      .catch(error => {
        console.error('Error fetching ndertesat:', error);
      });
  }, []);


  async function create(lifti: liftiCreationDTO) {
    try {
      await axios.post(urlLiftat202152581, lifti);
      history.push('/liftet');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: liftiCreationDTO = { emertimi: '', dataPT: new Date(), ndertesaId: 0 }; // Add shtetiId here

  return (
    <>
      <h3>Create a lifti</h3>
      <DisplayingErrors errors={errors} />
      <LiftiForm202152581
        model={initialModel}
        ndertesat={ndertesat}
        onSubmit={async value => {
          await create(value);
        }}
        ndertesaId={initialModel.ndertesaId} // Pass ndertesaId here
      />
    </>
  );
}

export default CreateLifti202152581
