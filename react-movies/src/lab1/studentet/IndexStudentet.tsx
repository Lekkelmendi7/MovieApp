import { urlStudentet } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { studentiDTO } from './studentet.model';
export default function IndexStudentet() {
    return (
        <>
            <IndexEntity<studentiDTO>
                url={urlStudentet} createURL="studentet/create" title="Studentet"
                entityName="Studentet202152581"
            >
                {(studentet, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Shteti</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentet?.map(studenti =>
                                <tr key={studenti.id}>
                                    <td>
                                        {buttons(`studentet/edit/${studenti.id}`, studenti.id)}
                                    </td>
                                    <td>
                                        {studenti.name}
                                    </td>
                                    <td>
                                        {studenti.shteti.name} {/* Accessing shteti data */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}
