import { useHistory, useParams } from "react-router-dom";
import GenreForm from './GenreForm'
import { genreCreationDTO } from "./genres.model";
import { useEffect, useState } from "react";
import { urlGenres } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import Loading from "../utils/Loading";
import DisplayingErrors from "../utils/DisplayingErrors";

export default function EditGenre(){
    const {id}: any = useParams();
    const [genre, setGenre] = useState<genreCreationDTO>();
    const [errors, setErrors]= useState<string[]>([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(`${urlGenres}/${id}`)
        .then((response: AxiosResponse<genreCreationDTO>) => {
            setGenre(response.data)
        })
    }, [id]);

    async function edit(genreToEdit: genreCreationDTO){
        try{
           await axios.put(`${urlGenres}/${id}`, genreToEdit);
           history.push('/genres');
        }catch(error: any){
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }
    return (
        <>
            <h3>Edit Genre</h3>
            <DisplayingErrors errors={errors} />
           {genre ? <GenreForm model={genre} 
           onSubmit={async value => {
            await edit(genre);

           }}
        /> : <Loading/>}
        </>
    )
}