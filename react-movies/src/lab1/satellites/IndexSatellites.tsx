import { urlSatellites202152581 } from '../../endpoints'
import IndexEntity from '../../utils/IndexEntity'
import { satelliteDTO } from './satellites.model'


const IndexSatellites = () => {
    return (
        <>
            <IndexEntity<satelliteDTO>
                url={urlSatellites202152581} createURL="satellites/create" title="Satellites"
                entityName="Satellites202152581"
            >
                {(satellites, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Planeti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {satellites?.map(satellite =>
                            <tr key={satellite.id}>
                                <td>
                                    {buttons(`satellites/edit/${satellite.id}`, satellite.id)}
                                </td>
                                <td>
                                    {satellite.name}
                                </td>
                                <td>
                                    {satellite.planet.name} {/* Accessing planet data */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </>}
            </IndexEntity>
        </>
    )
}

export default IndexSatellites
