// CreatePlayer.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DisplayingErrors from '../../utils/DisplayingErrors';
import { urlBankat202152581, urlPersonat202152581 } from '../../endpoints';
import PlayerForm from './PersoniForm';
import { bankaDTO } from '../bankat/bankat.model';
import { personiCreationDTO } from './personat.model';
import PersoniForm from './PersoniForm';


export default function CreatePlayer() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [bankas, setbankat] = useState<bankaDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlBankat202152581}`)
      .then(response => {
        setbankat(response.data);
      })
      .catch(error => {
        console.error('Error fetching bankas:', error);
      });
  }, []);

  async function create(banka: personiCreationDTO) {
    try {
      await axios.post(urlPersonat202152581, banka);
      history.push('/personat');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: personiCreationDTO = { emri: '', mbiemri: '',  bankaId: 0 }; // Add shtetiId here

  return (
    <>
      <h3>Create a personi</h3>
      <DisplayingErrors errors={errors} />
      <PersoniForm
        model={initialModel}
        bankat={bankas}
        onSubmit={async value => {
          await create(value);
        }}
        bankaId={initialModel.bankaId} // Pass shtetiId here
      />
    </>
  );
}
