
import { urlPlayers202152581 } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { playerDTO } from './players.model';
export default function IndexPlayers() {
    return (
        <>
            <IndexEntity<playerDTO>
                url={urlPlayers202152581} createURL="players/create" title="Players"
                entityName="Players202152581"
            >
                {(players, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Numri</th>
                                <th>Data Lindjes</th>
                                <th>Ekipi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players?.map(player =>
                                <tr key={player.id}>
                                    <td>
                                        {buttons(`players/edit/${player.id}`, player.id)}
                                    </td>
                                    <td>
                                        {player.name}
                                    </td>
                                    <td>
                                        {player.number}
                                    </td>
                                    <td>
                                        {player.birthYear}
                                    </td>
                                    <td>
                                        {player.team.name} {/* Accessing shteti data */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}
