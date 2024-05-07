import { urlShtetet } from "../../endpoints";
import EditEntity from "../../utils/EditEntity";
import ShtetiForm from "./ShtetiForm";
import { shtetiCreationDTO, shtetiDTO } from "./shtetet.model";

export default function EditShteti(){
    return (
        <>
            <EditEntity<shtetiCreationDTO , shtetiDTO> 
                url={urlShtetet} entityName="Shtetet202152581"
                indexURL="/shtetet"
            >
                {(entity, edit) =>
                    <ShtetiForm model={entity}
                    onSubmit={async value => {
                        await edit(value);
                    }}
                />
                }
            </EditEntity>
        </>
    )
}