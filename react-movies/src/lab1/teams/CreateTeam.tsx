import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { teamCreationDTO } from './teams.model';
import { urlTeams202152581} from '../../endpoints';
import DisplayingErrors from '../../utils/DisplayingErrors';
import TeamForm from './TeamForm';


export default function CreateTeam() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(team: teamCreationDTO){
        try{
            await axios.post(urlTeams202152581, team);
            history.push('/teams');
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
            <TeamForm model={{ name: '' }}
                onSubmit={async value => {
                   await create(value);
                }}
            />
        </>
    )
}