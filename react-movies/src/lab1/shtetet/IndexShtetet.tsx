import { urlShtetet } from '../../endpoints';
import IndexEntity from '../../utils/IndexEntity';
import { shtetiDTO } from './shtetet.model';
export default function IndexGenres() {
    return (
        <>
            <IndexEntity<shtetiDTO>
                url={urlShtetet} createURL="shtetet/create" title="Shtetet"
                entityName="Shtetet202152581"
            >
                {(shtetet, buttons) => <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shtetet?.map(shteti =>
                                <tr key={shteti.id}>
                                    <td>
                                        {buttons(`shtetet/edit/${shteti.id}`, shteti.id)}
                                    </td>
                                    <td>
                                        {shteti.name}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}