// // CreatePlayer.tsx
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import DisplayingErrors from '../../utils/DisplayingErrors';
// import { urlBankat202152581, urlPersonat202152581 } from '../../endpoints';
// import PlayerForm from './PersoniForm';
// import { bankaDTO } from '../bankat/bankat.model';
// import { personiCreationDTO } from './personat.model';
// import PersoniForm from './PersoniForm';


// export default function CreatePersonii() {
//   const history = useHistory();
//   const [errors, setErrors] = useState<string[]>([]);
//   const [bankatt, setbankatt] = useState<bankaaDTO[]>([]);

//   useEffect(() => {
//     axios.get(`${urlBankat202152581}`)
//       .then(response => {
//         setbankatt(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching bankas:', error);
//       });
//   }, []);

//   async function create(personii: personiiCreationDTO) {
//     try {
//       await axios.post(urlPersonatt202152581, personii);
//       history.push('/personatt');
//     } catch (error: any) {
//       if (error && error.response) {
//         setErrors(error.response.data);
//       }
//     }
//   }

//   // Initialize model with default values
//   const initialModel: personiiCreationDTO = { emri: '', mbiemri: '',  bankaaId: 0 }; // Add shtetiId here

//   return (
//     <>
//       <h3>Create a personi</h3>
//       <DisplayingErrors errors={errors} />
//       <PersoniiForm
//         model={initialModel}
//         bankatt={bankatt}
//         onSubmit={async value => {
//           await create(value);
//         }}
//         bankaId={initialModel.bankaaId} // Pass shtetiId here
//       />
//     </>
//   );
// }
