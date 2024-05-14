// CreatePlayer.tsx
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DisplayingErrors from '../../utils/DisplayingErrors';
import playerForm from './PlayerForm';
import { playerCreationDTO } from './players.model';
import { urlPlayers202152581, urlShtetet, urlStudentet, urlTeams202152581 } from '../../endpoints';
import { playerDTO } from '../players/players.model';
import PlayerForm from './PlayerForm';
import { teamDTO } from '../teams/teams.model';

export default function CreatePlayer() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);
  const [teams, setTeams] = useState<teamDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlTeams202152581}`)
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  async function create(team: playerCreationDTO) {
    try {
      await axios.post(urlPlayers202152581, team);
      history.push('/players');
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  // Initialize model with default values
  const initialModel: playerCreationDTO = { name: '', number: 0, birthYear: 0, teamId: 0 }; // Add shtetiId here

  return (
    <>
      <h3>Create a player</h3>
      <DisplayingErrors errors={errors} />
      <PlayerForm
        model={initialModel}
        teams={teams}
        onSubmit={async value => {
          await create(value);
        }}
        teamId={initialModel.teamId} // Pass shtetiId here
      />
    </>
  );
}
