// SatelliteForm.tsx
import { Form, Formik, Field, FormikHelpers } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../utils/Button";

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlPlanetet202152581 } from "../../endpoints";
import { planetiDTO } from "../planets/planets.model";
import { shtetiDTO } from "../shtetet/shtetet.model";
import { satelliteCreationDTO } from "./satellites.model";

interface SatelliteFormProps {
  model: satelliteCreationDTO;
  planets: planetiDTO[];
  planetId: number;
  onSubmit(values: satelliteCreationDTO, action: FormikHelpers<satelliteCreationDTO>): void;
}

export default function SatelliteForm(props: SatelliteFormProps) {
  const initialValues: satelliteCreationDTO = {
    name: props.model.name,
    planetId: props.model.planetId
  };

  const [planets, setPlanetet] = useState<shtetiDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    axios.get(`${urlPlanetet202152581}`)
      .then((response: AxiosResponse<planetiDTO[]>) => {
        setPlanetet(response.data);
      })
      .catch(error => {
        console.error('Error fetching planets:', error);
      });
  }, []);

  useEffect(() => {
    if (query.get('planetiId')) {
      initialValues.planetId = parseInt(query.get('planetId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required').max(75, 'Max length is 75 characters').firstLetterUpperCase(),
        planetId: Yup.number().required('Please select a planet'),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="planetId" className="form-label">Planeti</label>
            <Field as="select" id="planetId" name="planetId" className="form-select">
              <option value="0">--Choose a planet--</option>
              {props.planets.map(planet => (
                <option key={planet.id} value={planet.id}>{planet.name}</option>
              ))}
            </Field>
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
          <Link className="btn btn-secondary ms-2" to="/satellites">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}
