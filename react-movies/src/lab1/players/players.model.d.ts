

export interface playerCreationDTO {
    name: string;
    number: number;
    birthYear: number;
    teamId: number;
}

export interface playerDTO {
    id: number;
    name: string;
    number: number;
    birthYear: number;
    team: teamDTO;
}
