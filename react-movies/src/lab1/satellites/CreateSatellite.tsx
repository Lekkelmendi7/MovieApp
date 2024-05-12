import axios from 'axios';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { urlPlanetet202152581, urlSatellites202152581 } from '../../endpoints';
import DisplayingErrors from '../../utils/DisplayingErrors';

import SatelliteForm from '../satellites/SatelliteForm';
import { satelliteCreationDTO } from '../satellites/satellites.model';
import { planetiDTO } from '../planets/planets.model';

const CreateSatellite = () => {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [planetet, setPlanetet] = useState<planetiDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlPlanetet202152581}`)
   .then(response => {
        setPlanetet(response.data);
      })
   .catch(error => {
        console.error('Error fetching planetet:', error);
      });
  }, []);

  async function create(satellite: satelliteCreationDTO) {
    try {
      await axios.post(urlSatellites202152581, satellite);
      history.push('/satellites');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: satelliteCreationDTO = { name: '', planetId: 0 };

  return (
    <>
      <h3>Create a satellite</h3>
      <DisplayingErrors errors={errors} />
      <SatelliteForm
        model={initialModel}
        planets={planetet}
        onSubmit={async value => {
          await create(value);
        }}
        planetId={initialModel.planetId} // Pass the planetId here
      />
    </>
  );
}

export default CreateSatellite