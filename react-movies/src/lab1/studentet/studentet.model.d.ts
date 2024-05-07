import { shtetiDTO } from "../shtetet/shtetet.model";

export interface studentiCreationDTO {
    name: string;
    shtetiId: number;
}

export interface studentiDTO {
    id: number;
    name: string;
    shteti: shtetiDTO;
}
