import { sculptorDTO } from "../sculptors/sculptors.model";



export interface sculptureCreateDTO {
    name: string,
    dataKrijimit: string,
    sculptorId: number;
}

export interface sculptureDTO {
    id: number;
    name: string;
    dataKrijimit: string,
    sculptor: sculptorDTO;
}
