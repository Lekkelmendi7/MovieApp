// import { urlBankat202152581 } from "../../endpoints";
// import EditEntity from "../../utils/EditEntity";
// import BankaForm from "./BankaForm";
// import { bankaCreationDTO, bankaDTO } from "./bankat.model";

// export default function EditBankaa(){
//     return (
//         <>
//             <EditEntity<bankaaCreationDTO , bankaaDTO> 
//                 url={urlBankat202152581} entityName="Bankatt202152581"
//                 indexURL="/bankatt"
//             >
//                 {(entity, edit) =>
//                     <BankaaForm model={entity}
//                     onSubmit={async value => {
//                         await edit(value);
//                     }}
//                 />
//                 }
//             </EditEntity>
//         </>
//     )
// }