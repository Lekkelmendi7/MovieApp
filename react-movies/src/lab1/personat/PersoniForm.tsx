// personiForm.tsx
import { Form, Formik, Field, FormikHelpers } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../utils/Button";
import { personiCreationDTO } from "./personat.model";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlBankat202152581 } from "../../endpoints";
import { bankaDTO } from "../bankat/bankat.model";

interface PersoniFormProps {
  model: personiCreationDTO;
  bankat: bankaDTO[]; // Add bankat prop here
  bankaId: number; // Add bankad prop here
  onSubmit(values: personiCreationDTO, action: FormikHelpers<personiCreationDTO>): void;
}

export default function PersoniForm(props: PersoniFormProps) {
  const initialValues: personiCreationDTO = {
    emri: props.model.emri,
    mbiemri: props.model.mbiemri,
    bankaId: props.model.bankaId,
  };

  const [bankat, setBankat] = useState<bankaDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    axios.get(`${urlBankat202152581}/all`)
      .then((response: AxiosResponse<bankaDTO[]>) => {
        setBankat(response.data);
      })
      .catch(error => {
        console.error('Error fetching bankat:', error);
      });
  }, []);

  useEffect(() => {
    if (query.get('bankaId')){
      initialValues.bankaId = parseInt(query.get('bankaId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        emri: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
        bankaId: Yup.number().required('Please select a shteti'),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="emri" className="form-label">Name</label>
            <Field type="text" id="emri" name="emri" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="mbiemri" className="form-label">Last Name</label>
            <Field type="text" id="number" name="mbiemri" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="bankaId" className="form-label">Banka</label>
            <Field as="select" id="bankaId" name="bankaId" className="form-select">
              <option value="0">--Choose a bank--</option>
              {props.bankat.map(banka => (
                <option key={banka.id} value={banka.id}>{banka.name}</option>
              ))}
            </Field>
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
          <Link className="btn btn-secondary ms-2" to="/personat">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}
