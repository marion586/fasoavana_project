export type EmplacementModelItem = {
    id:           number;
    warehouse:    Warehouse;
    zone:         string;
    aisle:        number;
    rack:         string;
    floor:        number;
    locationCode: string;
}

export type EmplacementModelArray= Array<EmplacementModelItem>

export type Warehouse = {
    id:    number;
    label: string;
}

export type EmplacementForm = {
    warehouse: Warehouse;
    zone:      string;
    aisle:     number;
    rack:      string;
    floor:     number;
}

export type WarehouseForm = {
    id: number;
}