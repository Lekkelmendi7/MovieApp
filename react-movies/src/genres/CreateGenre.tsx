import axios from 'axios';
import { urlGenres } from '../endpoints';
import GenreForm from './GenreForm';
import { genreCreationDTO } from './genres.model';
import { useHistory } from 'react-router';
import DisplayingErrors from '../utils/DisplayingErrors';
import { useState } from 'react';

export default function CreateGenre() {

    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);
    
    async function create(genre: genreCreationDTO){
        try{
            await axios.post(urlGenres, genre);
            history.push('/genres')
        }catch(error: any){
            if(error && error.response.data){
                setErrors(error.response.data);
            }
        }
    }
    return (
        <>
        <DisplayingErrors errors={errors}/>
            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}
                onSubmit={async value => {
                    await create(value);
                }}
            />
        </>
    )
}