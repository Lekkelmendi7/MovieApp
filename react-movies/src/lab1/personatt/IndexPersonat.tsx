
// import { urlPersonat202152581 } from '../../endpoints';
// import IndexEntity from '../../utils/IndexEntity';
// import { personiDTO } from './personat.model';
// export default function IndexPersonat() {
//     return (
//         <>
//             <IndexEntity<personiiDTO>
//                 url={urlPersonatt202152581} createURL="personatt/create" title="Personatt"
//                 entityName="Personatt202152581"
//             >
//                 {(personii, buttons) => <>
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                                 <th>Numri</th>
//                                 <th>Data Lindjes</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {personii?.map(personn =>
//                                 <tr key={personn.id}>
//                                     <td>
//                                         {buttons(`personatt/edit/${personn.id}`, personn.id)}
//                                     </td>
//                                     <td>
//                                         {personn.emri}
//                                     </td>
//                                     <td>
//                                         {personn.mbiemri}
//                                     </td>
//                                     <td>
//                                         {personn.bankaa.name}
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </>}
//             </IndexEntity>
//         </>
//     )
// }
