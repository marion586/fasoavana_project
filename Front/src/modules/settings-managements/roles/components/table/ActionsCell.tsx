import {FC} from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { RoleModelItem } from '../../core/models/roles.model'

type Props = {
    role:RoleModelItem
}
export const ActionsCell: FC<Props> = ({role}) => { 
  const navigate = useNavigate()
  return (
    <div className='flex justify-center'>
        <FiEdit3 onClick={() => navigate(`edit/${role.id}`)} className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
    </div>
  )
}
