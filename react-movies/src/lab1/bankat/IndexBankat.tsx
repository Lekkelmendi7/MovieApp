import {  urlBankat202152581 } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { bankaDTO } from './bankat.model';
export default function IndexTeams() {
    return (
        <>
            <IndexEntity<bankaDTO>
                url={urlBankat202152581} createURL="bankat/create" title="Bankat"
                entityName="Teams202152581"
            >
                {(bankat, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankat?.map(banka =>
                                <tr key={banka.id}>
                                    <td>
                                        {buttons(`bankat/edit/${banka.id}`, banka.id)}
                                    </td>
                                    <td>
                                        {banka.name}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}