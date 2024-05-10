import { ndertesaDTO } from "../ndertesat202152581/ndertesat.model";


export interface liftiCreationDTO {
    emertimi: string;
    dataPT: Date,
    ndertesaId: number;
}

export interface liftiDTO {
    id: number;
    emertimi: string;
    dataPT: Date;
    ndertesa: ndertesaDTO;
}
