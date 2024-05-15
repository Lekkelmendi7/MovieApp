// // EditStudenti.tsx
// import { useState, useEffect } from "react";
// import axios from "axios";
// import EditEntity from "../../utils/EditEntity";
// import { urlPersonat202152581,urlBankat202152581 } from "../../endpoints";
// import PlayerForm from "./PersoniForm";
// import { personiCreationDTO, personiDTO } from "./personat.model";
// import { bankaDTO } from "../bankat/bankat.model";


// export default function EditPersonii() {
//     const [bankatt, setBankatt] = useState<bankaaDTO[]>([]);

//     useEffect(() => {
//         axios.get(`${urlBankat202152581}/`)
//             .then(response => {
//                 setBankatt(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching bankas:', error);
//             });
//     }, []);

//     return (
//         <>
//             <EditEntity<personiiCreationDTO, personiiDTO>
//                 url={urlPersonatt202152581} entityName="Personatt202152581"
//                 indexURL="/personatt"
//             >
//                 {(entity, edit) =>
//                     <PersoniiForm
//                         model={entity}
//                         bankatt={bankatt} 
//                         onSubmit={async value => {
//                             await edit(value);
//                         }}
//                         bankaId={entity.bankaaId} // Ensure bankaId is passed here
//                     />
//                 }
//             </EditEntity>
//         </>
//     )
// }
