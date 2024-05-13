import axios from 'axios';
import { useEffect, useState } from 'react'
import { urlSculptors202152581, urlSculptures202152581 } from '../../endpoints';
import EditEntity from '../../utils/EditEntity';
import { sculptureCreateDTO,  sculptureDTO } from './sculptures.model';
import SculptureForm from './SculptureForm';
import { sculptorDTO } from '../sculptors/sculptors.model';



const EditSculpture = () => {
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

    return (
        <>
            <EditEntity<sculptureCreateDTO, sculptureDTO>
                url={urlSculptures202152581} entityName="Sculptures202152581"
                indexURL="/sculptures"
            >
                {(entity, edit) =>
                    <SculptureForm
                        model={entity}
                        sculptors={sculptors}
                        onSubmit={async value => {
                            await edit(value);
                        }}
                        sculptorId={entity.sculptorId} // Ensure shtetiId is passed here
                    />
                }
            </EditEntity>
        </>
    )
}

export default EditSculpture