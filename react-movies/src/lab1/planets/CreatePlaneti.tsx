import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { urlPlanetet202152581 } from '../../endpoints';
import DisplayingErrors from '../../utils/DisplayingErrors';

import PlanetiForm from './PlanetiForm';
import { planetCreationDTO } from './planets.model';

const CreatePlaneti = () => {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(planet: planetCreationDTO){
      try{
          await axios.post(urlPlanetet202152581, planet);
          history.push('/planets');
      }
      catch (error: any) {
          if (error && error.response){
              setErrors(error.response.data);
          }
      }
  }

  return (
      <>
          <h3>Create a planet</h3>
          <DisplayingErrors errors={errors} />
          <PlanetiForm model={{ name: '', type: ''}}
              onSubmit={async value => {
                 await create(value);
              }}
          />
      </>
  )
}

export default CreatePlaneti
