// CreateStudenti.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DisplayingErrors from '../../utils/DisplayingErrors';
import StudentiForm from './StudentiForm';
import { studentiCreationDTO } from './studentet.model';
import { urlShtetet, urlStudentet } from '../../endpoints';
import { shtetiDTO } from '../shtetet/shtetet.model';

export default function CreateStudenti() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [shtetet, setShtetet] = useState<shtetiDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlShtetet}`)
      .then(response => {
        setShtetet(response.data);
      })
      .catch(error => {
        console.error('Error fetching shtetet:', error);
      });
  }, []);

  async function create(student: studentiCreationDTO) {
    try {
      await axios.post(urlStudentet, student);
      history.push('/studentet');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: studentiCreationDTO = { name: '', shtetiId: 0 }; // Add shtetiId here

  return (
    <>
      <h3>Create a student</h3>
      <DisplayingErrors errors={errors} />
      <StudentiForm
        model={initialModel}
        shtetet={shtetet}
        onSubmit={async value => {
          await create(value);
        }}
        shtetiId={initialModel.shtetiId} // Pass shtetiId here
      />
    </>
  );
}
