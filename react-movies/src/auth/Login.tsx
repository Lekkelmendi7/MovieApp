import { useContext, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";
import { useHistory } from "react-router-dom";
import { UserCredentials, authenticationResponse } from "./auth.model";
import { urlAccounts } from "../endpoints";
import { getClaims, saveToken } from "./handleJWT";
import axios from "axios";
import DisplayingErrors from "../utils/DisplayingErrors";
import AuthForm from "./AuthForm";

export default function Login(){
    const[errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useHistory();

    async function login(credentials: UserCredentials){
        try{
            setErrors([]);
            const response = await axios
            .post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            saveToken(response.data);
            update(getClaims());
            history.push('/');
        }catch(error: any){
            setErrors(error.response.data);
        }
    }

    return(
        <>
        <h3>Login</h3>
        <DisplayingErrors errors={errors} />
        <AuthForm model={{email: '', password: ''}}
        onSubmit={async values => await login(values)}
        />
        <h6 style={{marginTop: '30px'}}>If you don't have an account, please <a href="/register" style={{textDecoration: 'none'}}>Register</a></h6>
        <h6 style={{marginTop: '30px'}}><a href="/reset" style={{textDecoration: 'none'}}>Forgot your password ?</a></h6>  
        </>
    )
    
}