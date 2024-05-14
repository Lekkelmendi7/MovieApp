// EditStudenti.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import EditEntity from "../../utils/EditEntity";
import { urlPlayers202152581,urlTeams202152581 } from "../../endpoints";
import { teamDTO } from "../teams/teams.model";
import PlayerForm from "./PlayerForm";
import { playerCreationDTO, playerDTO } from "./players.model";

export default function EditPlayer() {
    const [teams, setTeams] = useState<teamDTO[]>([]);

    useEffect(() => {
        axios.get(`${urlTeams202152581}/`)
            .then(response => {
                setTeams(response.data);
            })
            .catch(error => {
                console.error('Error fetching teams:', error);
            });
    }, []);

    return (
        <>
            <EditEntity<playerCreationDTO, playerDTO>
                url={urlPlayers202152581} entityName="Players202152581"
                indexURL="/players"
            >
                {(entity, edit) =>
                    <PlayerForm
                        model={entity}
                        teams={teams} 
                        onSubmit={async value => {
                            await edit(value);
                        }}
                        teamId={entity.teamId} // Ensure teamId is passed here
                    />
                }
            </EditEntity>
        </>
    )
}
