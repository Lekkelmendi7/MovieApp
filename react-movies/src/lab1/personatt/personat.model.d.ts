import { bankaDTO } from "../bankat/bankat.model";


export interface personiiCreationDTO {
    emri: string;
    mbiemri: string;
    bankaId: number;
}

export interface personiiDTO {
    id: number;
    emri: string;
    mbiemri: string;
    bankaId: number;
    banka: bankaDTO;
}
