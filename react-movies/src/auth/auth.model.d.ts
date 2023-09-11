export interface claim{
    name: string;
    value: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface authenticationResponse {
    token: string;
    expiration: string;
}

export interface userDTO{
    id: string;
    email: string;
}