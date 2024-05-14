import {  urlTeams202152581 } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { teamDTO } from './teams.model';
export default function IndexTeams() {
    return (
        <>
            <IndexEntity<teamDTO>
                url={urlTeams202152581} createURL="teams/create" title="Teams"
                entityName="Teams202152581"
            >
                {(teams, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams?.map(team =>
                                <tr key={team.id}>
                                    <td>
                                        {buttons(`teams/edit/${team.id}`, team.id)}
                                    </td>
                                    <td>
                                        {team.name}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}