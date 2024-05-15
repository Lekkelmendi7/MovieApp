// import {  urlBankat202152581 } from '../../endpoints';
// import IndexEntity from '../../utils/IndexEntity';
// import { bankaaDTO } from './bankat.model';
// export default function IndexBankatt() {
//     return (
//         <>
//             <IndexEntity<bankaaDTO>
//                 url={urlBankat202152581} createURL="bankatt/create" title="Bankatt"
//                 entityName="Bankatt202152581"
//             >
//                 {(bankatt, buttons) => <>
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bankatt?.map(bankaa =>
//                                 <tr key={bankaa.id}>
//                                     <td>
//                                         {buttons(`bankatt/edit/${bankaa.id}`, bankaa.id)}
//                                     </td>
//                                     <td>
//                                         {bankaa.name}
//                                     </td>
//                                 </tr>)}
//                         </tbody>
//                     </>}

//             </IndexEntity>
//         </>
//     )
// }