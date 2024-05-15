// EditStudenti.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import EditEntity from "../../utils/EditEntity";
import { urlPersonat202152581,urlBankat202152581 } from "../../endpoints";
import PlayerForm from "./PersoniForm";
import { personiCreationDTO, personiDTO } from "./personat.model";
import { bankaDTO } from "../bankat/bankat.model";


export default function EditPersoni() {
    const [bankas, setBankat] = useState<bankaDTO[]>([]);

    useEffect(() => {
        axios.get(`${urlBankat202152581}/`)
            .then(response => {
                setBankat(response.data);
            })
            .catch(error => {
                console.error('Error fetching bankas:', error);
            });
    }, []);

    return (
        <>
            <EditEntity<personiCreationDTO, personiDTO>
                url={urlPersonat202152581} entityName="Personat202152581"
                indexURL="/personat"
            >
                {(entity, edit) =>
                    <PlayerForm
                        model={entity}
                        bankat={bankas} 
                        onSubmit={async value => {
                            await edit(value);
                        }}
                        bankaId={entity.bankaId} // Ensure bankaId is passed here
                    />
                }
            </EditEntity>
        </>
    )
}
