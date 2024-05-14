// playerForm.tsx
import { Form, Formik, Field, FormikHelpers } from "formik";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../utils/Button";
import { playerCreationDTO } from "./players.model";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlTeams202152581 } from "../../endpoints";
import { teamDTO } from "../teams/teams.model";

interface PlayerFormProps {
  model: playerCreationDTO;
  teams: teamDTO[]; // Add teams prop here
  teamId: number; // Add teamd prop here
  onSubmit(values: playerCreationDTO, action: FormikHelpers<playerCreationDTO>): void;
}

export default function PlayerForm(props: PlayerFormProps) {
  const initialValues: playerCreationDTO = {
    name: props.model.name,
    number: props.model.number,
    birthYear: props.model.birthYear,
    teamId: props.model.teamId
  };

  const [teams, setTeams] = useState<teamDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    axios.get(`${urlTeams202152581}/all`)
      .then((response: AxiosResponse<teamDTO[]>) => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  useEffect(() => {
    if (query.get('teamId')){
      initialValues.teamId = parseInt(query.get('teamId')!, 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('This field is required').max(50, 'Max length is 50 characters').firstLetterUpperCase(),
        teamId: Yup.number().required('Please select a shteti'),
      })}
    >
      {(formikProps) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Number</label>
            <Field type="number" id="number" name="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="birthYear" className="form-label">Birth Year</label>
            <Field type="number" id="birthYear" name="birthYear" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="teamId" className="form-label">Shteti</label>
            <Field as="select" id="teamId" name="teamId" className="form-select">
              <option value="0">--Choose a shteti--</option>
              {props.teams.map(team => (
                <option key={team.id} value={team.id}>{team.name}</option>
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
