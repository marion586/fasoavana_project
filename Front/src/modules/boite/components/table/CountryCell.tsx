import {FC} from "react";
import { BankModel } from "../../core/models/bank.model";

type Props = {
   bank:BankModel
}


export const CountryCell: FC<Props> = ({bank }) => {
    if (bank?.country) return (
        <div className=''>
            {bank.country.code}
        </div>
    )
    else return null
}

