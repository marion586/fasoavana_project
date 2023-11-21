import { Civility , Country } from "../core/models/bank.model"
export const parseDataSelect = (data: Country[] | Civility[], type: "country" | "civility") => {
    if (data?.length && type === "country" ) {
      const parsedData = (data as Country[])?.map(({ id, nameFr }: Country) => ({  label: nameFr, value: `/countries/${id}` }))
     return parsedData
    }
     if (data?.length && type === "civility" ) {
      const parsedData = (data as Civility[])?.map(({ id, label }: Civility) => ({  label, value: `/civilities/${id}` }))
     return parsedData
    }
   }