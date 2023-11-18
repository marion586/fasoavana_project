import {FC} from "react";
import { ArtilceModelItem } from "../../core/models/article.model";


type Props = {
   article:ArtilceModelItem
}


export const CountryCell: FC<Props> = ({article }) => {
    if (article?.id) return (
        <div className=''>
            {article.id}
        </div>
    )
    else return null
}

