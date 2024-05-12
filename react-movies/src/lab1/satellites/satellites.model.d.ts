import { planetiDTO } from "../planets/planets.model";


export interface satelliteCreationDTO {
    name: string;
    planetId: number;
}

export interface satelliteDTO {
    id: number;
    name: string;
    planet: planetiDTO;
}
