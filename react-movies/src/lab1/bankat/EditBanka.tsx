import { urlBankat202152581 } from "../../endpoints";
import EditEntity from "../../utils/EditEntity";
import BankaForm from "./BankaForm";
import { bankaCreationDTO, bankaDTO } from "./bankat.model";

export default function EditBanka(){
    return (
        <>
            <EditEntity<bankaCreationDTO , bankaDTO> 
                url={urlBankat202152581} entityName="Bankat202152581"
                indexURL="/bankat"
            >
                {(entity, edit) =>
                    <BankaForm model={entity}
                    onSubmit={async value => {
                        await edit(value);
                    }}
                />
                }
            </EditEntity>
        </>
    )
}