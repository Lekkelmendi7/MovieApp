import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { urlNdertesat202152581 } from '../../endpoints';
import DisplayingErrors from '../../utils/DisplayingErrors';
import { ndertesaCreationDTO } from './ndertesat.model';
import NdertesaForm202152581 from './NdertesaForm202152581';


const CreateNdertesa202152581 = () => {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(ndertesa: ndertesaCreationDTO){
        try{
            await axios.post(urlNdertesat202152581, ndertesa);
            history.push('/ndertesat');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create a ndertesa</h3>
            <DisplayingErrors errors={errors} />
            <NdertesaForm202152581 model={{ emertimi: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}

export default CreateNdertesa202152581
