import {FC} from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { EmplacementModelItem } from '../../core/models/emplacement.model'
import { BsTrash } from 'react-icons/bs'

type Props = {
    emplacement:EmplacementModelItem
}
export const ActionsCell: FC<Props> = ({emplacement}) => { 
  const navigate = useNavigate()
  return (
    <div className='flex justify-center'>
        <FiEdit3 onClick={() => navigate(`edit/${emplacement.id}`)} className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <BsTrash className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
    </div>
  )
}
