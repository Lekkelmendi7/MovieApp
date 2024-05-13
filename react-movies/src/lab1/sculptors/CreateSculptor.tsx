import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DisplayingErrors from '../../utils/DisplayingErrors';
import { urlSculptors202152581 } from '../../endpoints';
import { sculptorCreateDTO } from './sculptors.model';
import SculptorForm from './SculptorForm';


export default function CreateSculptor() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(sculptor: sculptorCreateDTO){
        try{
            await axios.post(urlSculptors202152581, sculptor);
            history.push('/sculptors');
        }
        catch (error: any) {
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create a sculptor</h3>
            <DisplayingErrors errors={errors} />
            <SculptorForm model={{ name: '', dataLindjes: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}