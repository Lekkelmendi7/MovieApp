// import axios from 'axios';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// import { bankaCreationDTO } from './bankat.model';
// import DisplayingErrors from '../../utils/DisplayingErrors';
// import BankaForm from './BankaForm';
// import { urlBankat202152581 } from '../../endpoints';


// export default function CreateBankaa() {
//     const history = useHistory();
//     const [errors, setErrors] = useState<string[]>([]);

//     async function create(bankaa: bankaaCreationDTO){
//         try{
//             await axios.post(urlBankatt202152581, bankaa);
//             history.push('/bankatt');
//         }
//         catch (error: any) {
//             if (error && error.response){
//                 setErrors(error.response.data);
//             }
//         }
//     }

//     return (
//         <>
//             <h3>Create a banka</h3>
//             <DisplayingErrors errors={errors} />
//             <BankaaForm model={{ name: '' }}
//                 onSubmit={async value => {
//                    await create(value);
//                 }}
//             />
//         </>
//     )
// }