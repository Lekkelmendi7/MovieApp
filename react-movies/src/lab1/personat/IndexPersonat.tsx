
import { urlPersonat202152581 } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { personiDTO } from './personat.model';
export default function IndexPersonat() {
    return (
        <>
            <IndexEntity<personiDTO>
                url={urlPersonat202152581} createURL="personat/create" title="Personat"
                entityName="Personat202152581"
            >
                {(personis, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Numri</th>
                                <th>Data Lindjes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personis?.map(personi =>
                                <tr key={personi.id}>
                                    <td>
                                        {buttons(`personat/edit/${personi.id}`, personi.id)}
                                    </td>
                                    <td>
                                        {personi.emri}
                                    </td>
                                    <td>
                                        {personi.mbiemri}
                                    </td>
                                    <td>
                                        {personi.banka.name}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}
