/* eslint-disable @typescript-eslint/no-explicit-any */
export type ArtilceModelItem = {
    id:             number;
    identification: Identification;
    descriptif:     Descriptor;
    champLibre:     FreeField;
    parametre:      Setting;
    qrcode:         string;
}

export type ArtilceModelArray= Array<ArtilceModelItem>

export type FreeField = {
    id:                       number;
    premierCommercialisation: Date;
    marqueCommerciale:        string;
    objectifQuantiteVendu:    number;
    urlFicheTechnique:        string;
    referenceFabriquant:      string;
}

export type Descriptor = {
    id:          number;
    langue1:     string;
    langue2:     string;
    hsCode:      string;
    paysOrigine: PaysOrigine;
    catalog:     Catalog;
}

export type Catalog = {
    id:    number;
    label: string;
}

export type PaysOrigine = {
    id:     number;
    code:   string;
    nameEn: string;
    nameFr: string;
}

export type Identification = {
    id:               number;
    reference:        string;
    designation:      string;
    nomenclature:     string;
    prixAchat:        number;
    dernierPrixAchat: number;
    coefficient:      number;
    coutStandard:     number;
    prixVente:        number;
    prixVenteType:    PrixVenteType;
    tarifArticles:    TarifArticle[];
    suiviStock:       PrixVenteType;
    conditioning:     Catalog;
    warehouse:        string;
    uniteVente:       PrixVenteType;
    locations:        Location[];
}

export type Location = {
    id:           number;
    warehouse:    string;
    zone:         string;
    aisle:        number;
    rack:         string;
    floor:        number;
    locationCode: string;
}

export type PrixVenteType = {
    id:   number;
    name: string;
}

export type TarifArticle = {
    id:                number;
    coefficient:       number;
    prixVente:         number;
    remise:            number;
    categoryTarifaire: PrixVenteType;
}

export type Setting = {
    id:                 number;
    mettreEnSommeil:    boolean;
    stockMinimum:       number;
    stockMaximum:       number;
    nbMoisStock:        number;
    datePremiereEntree: Date;
    stockAlerte:        number;
    stockMoyen:         number;
}

export type StockTracking = {
    id: number,
    name: string
}

export type  StockTrackingArray = Array<StockTracking>

export type TypeSalePriceArray = Array<StockTracking>
