import { urlTeams202152581 } from "../../endpoints";
import EditEntity from "../../utils/EditEntity";
import TeamForm from "./TeamForm";
import { teamCreationDTO, teamDTO } from "./teams.model";

export default function EditTeam(){
    return (
        <>
            <EditEntity<teamCreationDTO , teamDTO> 
                url={urlTeams202152581} entityName="Teams202152581"
                indexURL="/teams"
            >
                {(entity, edit) =>
                    <TeamForm model={entity}
                    onSubmit={async value => {
                        await edit(value);
                    }}
                />
                }
            </EditEntity>
        </>
    )
}