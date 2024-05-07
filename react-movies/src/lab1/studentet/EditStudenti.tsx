import { useState, useEffect } from "react";
import axios from "axios";
import EditEntity from "../../utils/EditEntity";
import StudentiForm from "./StudentiForm";
import { studentiCreationDTO, studentiDTO } from "./studentet.model";
import { shtetiDTO } from "../shtetet/shtetet.model";
import { urlStudentet, urlShtetet } from "../../endpoints";

export default function EditStudenti() {
    const [shtetet, setShtetet] = useState<shtetiDTO[]>([]);

    useEffect(() => {
        axios.get(`${urlShtetet}/all`)
            .then(response => {
                setShtetet(response.data);
            })
            .catch(error => {
                console.error('Error fetching shtetet:', error);
            });
    }, []);

    return (
        <>
             <EditEntity<studentiCreationDTO, studentiDTO>
                url={urlStudentet} entityName="Studentet202152581"
                indexURL="/studentet"
            >
                {(entity, edit) =>
                    <StudentiForm
                        model={entity}
                        shtetet={shtetet} 
                        onSubmit={async value => {
                            await edit(value);
                        }}
                    />
                }
            </EditEntity>
        </>
    )
}
