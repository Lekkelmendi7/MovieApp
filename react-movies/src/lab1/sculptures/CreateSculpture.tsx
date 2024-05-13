// CreateStudenti.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DisplayingErrors from '../../utils/DisplayingErrors';
import { urlSculptors202152581, urlSculptures202152581 } from '../../endpoints';
import { sculptorDTO } from '../sculptors/sculptors.model';import SculptureForm from './SculptureForm';
import { sculptureCreateDTO } from './sculptures.model';
;

export default function CreateSculpture() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [sculptors, setSculptors] = useState<sculptorDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlSculptors202152581}`)
      .then(response => {
        setSculptors(response.data);
      })
      .catch(error => {
        console.error('Error fetching sculptors:', error);
      });
  }, []);

  async function create(sculpture: sculptureCreateDTO) {
    try {
      await axios.post(urlSculptures202152581, sculpture);
      history.push('/sculptures');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: sculptureCreateDTO = { name: '', dataKrijimit: '', sculptorId: 0 }; // Add shtetiId here

  return (
    <>
      <h3>Create a sculpture</h3>
      <DisplayingErrors errors={errors} />
      <SculptureForm
        model={initialModel}
        sculptors={sculptors}
        onSubmit={async value => {
          await create(value);
        }}
        sculptorId={initialModel.sculptorId} // Pass shtetiId here
      />
    </>
  );
}
