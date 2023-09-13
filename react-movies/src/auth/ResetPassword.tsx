import axios from 'axios';
import AuthForm from './AuthForm';
import {urlAccounts} from '../endpoints';
import { useContext, useState } from 'react';
import DisplayErrors from '../utils/DisplayingErrors';
import { getClaims, saveToken } from './handleJWT';
import AuthenticationContext from './AuthenticationContext';
import { useHistory } from 'react-router-dom';
import { authenticationResponse, userCredentials } from './auth.models';

export default function Login(){

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useHistory();

    async function reset(credentials: userCredentials){
        try {
            setErrors([]);
            const response = await axios
            .post<authenticationResponse>(`${urlAccounts}/resetPassword`, credentials);
            saveToken(response.data);
            update(getClaims());
            history.push('/');
        }
        catch (error: any){
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Reset Password</h3>
            <DisplayErrors errors={errors} />
            <AuthForm model={{email: '', password: ''}}
             onSubmit={async values => await reset(values)}
            />
            
        </>
    )
}