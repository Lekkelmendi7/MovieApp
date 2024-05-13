// StudentiForm.tsx
import { Form, Formik, Field, FormikHelpers } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../utils/Button";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlSculptors202152581 } from "../../endpoints";
import {sculptorDTO } from "../sculptors/sculptors.model";
import { sculptureCreateDTO } from "./sculptures.model";

interface SculptureFormProps {
  model: sculptureCreateDTO;
  sculptors: sculptorDTO[]; // Add sculptors prop here
  sculptorId: number; // Add shtetiId prop here
  onSubmit(values: sculptureCreateDTO, action: FormikHelpers<sculptureCreateDTO>): void;
}

export default function SculptureForm(props: SculptureFormProps) {
  const initialValues: sculptureCreateDTO = {
    name: props.model.name,
    dataKrijimit: props.model.dataKrijimit,
    sculptorId: props.model.sculptorId,
  };

  const [sculptors, setSculptors] = useState<sculptorDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    axios.get(`${urlSculptors202152581}`)
      .then((response: AxiosResponse<sculptorDTO[]>) => {
        setSculptors(response.data);
      })
      .catch(error => {
        console.error('Error fetching sculptors:', error);
      });
  }, []);

  useEffect(() => {
    if (query.get('sculptorId')){
      initialValues.sculptorId = parseInt(query.get('sculptorId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
        sculptorId: Yup.number().required('Please select a sculptor'),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="dataKrijimit" className="form-label">Date of Creation</label>
            <Field type="text" id="dataKrijimit" name="dataKrijimit" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="sculptorId" className="form-label">Sculptor</label>
            <Field as="select" id="sculptorId" name="sculptorId" className="form-select">
              <option value="0">--Choose a sculptor--</option>
              {props.sculptors.map(sculptor => (
                <option key={sculptor.id} value={sculptor.id}>{sculptor.name}</option>
              ))}
            </Field>
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
          <Link className="btn btn-secondary ms-2" to="/sculptures">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}
