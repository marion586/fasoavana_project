/* eslint-disable @typescript-eslint/no-explicit-any */
export type RoleModelItem = {
    id:          number;
    name:        string;
    supply:      boolean;
    permissions: string[];
}

export type RoleModelArray= Array<RoleModelItem>

