import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { shtetiCreationDTO } from './shtetet.model';
import { urlShtetet } from '../../endpoints';
import DisplayingErrors from '../../utils/DisplayingErrors';
import ShtetiForm from './ShtetiForm';


export default function Createshteti() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(shteti: shtetiCreationDTO){
        try{
            await axios.post(urlShtetet, shteti);
            history.push('/shtetet');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create a genre</h3>
            <DisplayingErrors errors={errors} />
            <ShtetiForm model={{ name: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}