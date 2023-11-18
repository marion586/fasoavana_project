import { createSlice } from "@reduxjs/toolkit"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const initState: any = {
    identification: {
    reference: "",
    designation: "",
    nomenclature: "",
    prixAchat: 0,
    dernierPrixAchat: 0,
    coefficient: 0,
    coutStandard: 0,
    prixVente: 0,
    prixVenteType: null as any/*: {
        "id": 0,
        "name": "string"
      }*/,
    tarifArticles: [
        /*{
          "id": 0,
          "coefficient": 0,
          "prixVente": 0,
          "remise": 0,
          "categoryTarifaire": {
            "id": 0,
            "name": "string"
          }
        }*/
      ],
    suiviStock: null as any /*{
        "id": 0,
        "name": "string"
    }*/,
    conditioning: null as any /*{
        "id": 0,
        "label": "string"
      }*/,
    warehouse: null as any /*{
        "id": 0,
        "label": "string"
      }*/,
    uniteVente: null as any /*{
        "id": 0,
        "name": "string"
      }*/,
    locations: [
        /*{
          "id": 0,
          "warehouse": {
            "id": 0,
            "label": "string"
          },
          "zone": "string",
          "aisle": 0,
          "rack": "string",
          "floor": 0,
          "locationCode": "string"
        }*/
      ],
    family: null as any | string/*{
        "id": 0,
        "label": "string"
      }*/
    },
    descriptif: {
      langue1: "",
      langue2: "",
      hsCode: "",
      paysOrigine: null as any /*{
        "id": 0,
        "code": "string",
        "nameEn": "string",
        "nameFr": "string"
      }*/,
      catalog: null as any /*{
        "id": 0,
        "label": "string"
      }*/,
      family: null as any /*{
        "id": 0,
        "label": "string"
      }*/,
      subFamily: null as any /*{
        "id": 0,
        "label": "string"
      }*/
    },
    champLibre: {
      premierCommercialisation: null as any | Date,
      marqueCommerciale: "",
      objectifQuantiteVendu: 0,
      urlFicheTechnique: "" as any,
      referenceFabriquant: ""
    },
    parametre: {
      mettreEnSommeil: false as boolean | any,
      stockMinimum: 0,
      stockMaximum: 0,
      nbMoisStock: 0,
      datePremiereEntree: null as | any,
      stockAlerte: 0,
      stockMoyen: 0
    },
    qrcode: "" as any,
    storeArticles: [
      /*{
        "id": 0,
        "quantite": 0,
        "store": {
          "id": 0,
          "name": "string"
        }
      }*/
    ]
}

const reducer = createSlice({
    name: "articlesForm",
    initialState: initState,
    reducers: {
       resetArticleForm: () => {
        return initState
       },
       setArticleForm: (_,action) => {
         return action.payload
       }
    }
})
  
export const {resetArticleForm, setArticleForm} = reducer.actions
export const articleFormReducer = reducer.reducer