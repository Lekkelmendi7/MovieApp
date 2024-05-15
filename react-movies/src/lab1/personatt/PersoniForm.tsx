// // personiForm.tsx
// import { Form, Formik, Field, FormikHelpers } from "formik";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import * as Yup from 'yup';
// import Button from "../../utils/Button";
// import { personiCreationDTO } from "./personat.model";
// import { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";
// import { urlBankat202152581 } from "../../endpoints";
// import { bankaDTO } from "../bankat/bankat.model";

// interface PersoniiFormProps {
//   model: personiiCreationDTO;
//   bankatt: bankaaDTO[]; // Add bankat prop here
//   bankaaId: number; // Add bankad prop here
//   onSubmit(values: personiiCreationDTO, action: FormikHelpers<personiiCreationDTO>): void;
// }

// export default function PersoniiForm(props: PersoniiFormProps) {
//   const initialValues: personiiCreationDTO = {
//     emri: props.model.emri,
//     mbiemri: props.model.mbiemri,
//     bankaId: props.model.bankaId,
//   };

//   const [bankatt, setBankatt] = useState<bankaaDTO[]>([]);
//   const history = useHistory();
//   const query = new URLSearchParams(useLocation().search);

//   useEffect(() => {
//     axios.get(`${urlBankatt202152581}/all`)
//       .then((response: AxiosResponse<bankaaDTO[]>) => {
//         setBankatt(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching bankat:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (query.get('bankaaId')){
//       initialValues.bankaId = parseInt(query.get('bankaaId')!, 10);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={props.onSubmit}
//       validationSchema={Yup.object({
//         emri: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
//         bankaaId: Yup.number().required('Please select a shteti'),
//       })}
//     >
//       {(formikProps) => (
//         <Form>
//           <div className="mb-3">
//             <label htmlFor="emri" className="form-label">Name</label>
//             <Field type="text" id="emri" name="emri" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="mbiemri" className="form-label">Last Name</label>
//             <Field type="text" id="number" name="mbiemri" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="bankaId" className="form-label">Banka</label>
//             <Field as="select" id="bankaId" name="bankaId" className="form-select">
//               <option value="0">--Choose a bank--</option>
//               {props.bankatt.map(bankaa => (
//                 <option key={bankaa.id} value={bankaa.id}>{bankaa.name}</option>
//               ))}
//             </Field>
//           </div>
//           <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
//           <Link className="btn btn-secondary ms-2" to="/personatt">Cancel</Link>
//         </Form>
//       )}
//     </Formik>
//   );
// }
