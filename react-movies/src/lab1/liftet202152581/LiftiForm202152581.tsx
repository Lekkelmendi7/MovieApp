import React, { useEffect, useState } from 'react'
import { liftiCreationDTO, liftiDTO } from './liftet.model';
import { ndertesaDTO } from '../ndertesat202152581/ndertesat.model';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import axios, { AxiosResponse } from 'axios';
import { urlNdertesat202152581 } from '../../endpoints';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from '../../utils/Button';
import * as Yup from 'yup';


interface LiftiFormProps {
  model: liftiCreationDTO;
  ndertesat: ndertesaDTO[]; // Add liftet prop here
  ndertesaId: number; // Add ndertesaId prop here
  onSubmit(values: liftiCreationDTO, action: FormikHelpers<liftiCreationDTO>): void;
}


const LiftiForm202152581 = (props: LiftiFormProps) => {
  const initialValues: liftiCreationDTO = {
    emertimi: props.model.emertimi,
    dataPT: props.model.dataPT,
    ndertesaId: props.ndertesaId,
  };
  
  const [ndertesat, setNdertesat] = useState<ndertesaDTO[]>([]);
  const history = useHistory();
  //const query = new URLSearchParams(useLocation().search);
  
  useEffect(() => {
    axios.get(`${urlNdertesat202152581}`)
      .then((response: AxiosResponse<ndertesaDTO[]>) => {
        setNdertesat(response.data);
      })
      .catch(error => {
        console.error('Error fetching liftet:', error);
      });
  }, []);
  
  /*useEffect(() => {
    if (query.get('ndertesaId')){
      initialValues.ndertesaId = parseInt(query.get('ndertesaId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   */
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
      emertimi: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
      ndertesaId: Yup.number().required('Please select a ndertesa'),
    })}
  >
    {(formikProps) => (
      <Form>
        <div className="mb-3">
            <label htmlFor="emertimi" className="form-label">Emertimi</label>
            <Field type="text" id="emertimi" name="emertimi" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="dataPT" className="form-label">Data</label>
            <Field type="date" id="dataPT" name="dataPT" className="form-control" />
          </div>
        <div className="mb-3">
          <label htmlFor="ndertesaId" className="form-label">Ndertesa</label>
          <Field as="select" id="ndertesaId" emertimi="ndertesaId" className="form-select">
            <option value="0">--Choose a ndertesa--</option>
            {props.ndertesat.map(ndertesa => (
              <option key={ndertesa.id} value={ndertesa.id}>{ndertesa.emertimi}</option>
            ))}
          </Field>
        </div>
        <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
        <Link className="btn btn-secondary ms-2" to="/liftet">Cancel</Link>
      </Form>
    )}
  </Formik>
  );
}

export default LiftiForm202152581
