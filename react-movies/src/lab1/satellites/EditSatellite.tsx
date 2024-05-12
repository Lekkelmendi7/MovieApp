import axios from 'axios';
import { useEffect, useState } from 'react'
import { urlPlanetet202152581, urlSatellites202152581 } from '../../endpoints';
import EditEntity from '../../utils/EditEntity';


import { planetiDTO } from '../planets/planets.model';
import SatelliteForm from './SatelliteForm';
import { satelliteCreationDTO, satelliteDTO } from './satellites.model';

const EditSatellite = () => {
  const [planets, setSatellites] = useState<planetiDTO[]>([]);

    useEffect(() => {
        axios.get(`${urlPlanetet202152581}`)
            .then(response => {
                setSatellites(response.data);
            })
            .catch(error => {
                console.error('Error fetching planets:', error);
            });
    }, []);

    return (
        <>
            <EditEntity<satelliteCreationDTO, satelliteDTO>
                url={urlSatellites202152581} entityName="Satellites202152581"
                indexURL="/satellites"
            >
                {(entity, edit) =>
                    <SatelliteForm
                        model={entity}
                        planets={planets}
                        onSubmit={async value => {
                            await edit(value);
                        }}
                        planetId={entity.planetId} // Ensure shtetiId is passed here
                    />
                }
            </EditEntity>
        </>
    )
}

export default EditSatellite