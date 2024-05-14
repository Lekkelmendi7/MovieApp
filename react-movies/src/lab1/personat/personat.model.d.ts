import { bankaDTO } from "../bankat/bankat.model";


export interface personiCreationDTO {
    emri: string;
    mbiemri: string;
    bankaId: number;
}

export interface personiDTO {
    id: number;
    emri: string;
    mbiemri: string;
    bankaId: number;
    banka: bankaDTO;
}
