import { Form, Formik, Field, FormikHelpers } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../utils/Button";
import { studentiCreationDTO } from "./studentet.model";
import { shtetiDTO } from "../shtetet/shtetet.model";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlShtetet } from "../../endpoints";

export default function StudentiForm(props: StudentiFormProps) {
  const initialValues: studentiCreationDTO = {
    name: props.model.name,
    shtetiId: props.shtetiId,
  };

  const [shtetet, setShtetet] = useState<shtetiDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    axios.get(`${urlShtetet}/all`)
      .then((response: AxiosResponse<shtetiDTO[]>) => {
        setShtetet(response.data);
      })
      .catch(error => {
        console.error('Error fetching shtetet:', error);
      });
  }, []);

  useEffect(() => {
    if (query.get('genreId')){
      initialValues.shtetiId = parseInt(query.get('genreId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
        shtetiId: Yup.number().required('Please select a shteti'),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="shtetiId" className="form-label">Shteti</label>
            <Field as="select" id="shtetiId" name="shtetiId" className="form-select">
              <option value="0">--Choose a shteti--</option>
              {shtetet.map(shteti => (
                <option key={shteti.id} value={shteti.id}>{shteti.name}</option>
              ))}
            </Field>
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
          <Link className="btn btn-secondary ms-2" to="/studentet">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}

interface StudentiFormProps {
  model: studentiCreationDTO;
  onSubmit(values: studentiCreationDTO, action: FormikHelpers<studentiCreationDTO>): void;
  shtetiId: number;
}
