import { useContext, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";
import { useHistory } from "react-router-dom";
import { UserCredentials, authenticationResponse } from "./auth.model";
import axios from "axios";
import { urlAccounts } from "../endpoints";
import { getClaims, saveToken } from "./handleJWT";
import DisplayingErrors from "../utils/DisplayingErrors";
import AuthForm from "./AuthForm";

export default function Register(){
 const[error, setErrors] = useState<string[]>([]);
 const {update} = useContext(AuthenticationContext);
 const history= useHistory();

 async function register(credentials: UserCredentials){
    try{
        setErrors([]);
        const response = await axios
        .post<authenticationResponse>(`${urlAccounts}/create`, credentials);
        saveToken(response.data);
        update(getClaims());
        history.push('/');

    }catch(error: any){
        setErrors(error.response.data);
    }
 }
 return(
    <>
    <h3>Register</h3>
    <DisplayingErrors errors={error} />
    <AuthForm 
    model={{email: '', password: ''}}
    onSubmit={async values => await register(values)}
    />
     <h6 style={{marginTop: '30px'}}>You already have an account, please <a href="/login" style={{textDecoration: 'none'}}>Login</a></h6>
    </>
 )
}
