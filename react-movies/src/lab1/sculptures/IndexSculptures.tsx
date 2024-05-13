import { urlSculptures202152581 } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { sculptureDTO } from './sculptures.model';
export default function IndexSculptures() {
    return (
        <>
            <IndexEntity<sculptureDTO>
                url={urlSculptures202152581} createURL="sculptures/create" title="Sculptures"
                entityName="Sculptures202152581"
            >
                {(sculptures, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date of Creation</th>
                                <th>Sculptor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sculptures?.map(sculpture =>
                                <tr key={sculpture.id}>
                                    <td>
                                        {buttons(`sculptures/edit/${sculpture.id}`, sculpture.id)}
                                    </td>
                                    <td>
                                        {sculpture.name}
                                    </td>
                                    <td>
                                        {sculpture.dataKrijimit}
                                    </td>
                                    <td>
                                        {sculpture.sculptor.name} {/* Accessing shteti data */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}
