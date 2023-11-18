import {FC,useState} from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { WarehouseModel } from '../../core/models/warehouse.model'
import { deleteWarehouseById } from '../../core/requests/delete_requests'
import Spinner from '@/shared/components/Spinner'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/apps/store'
import { fetchWarehouses } from '../../core/actions'
import { useRequest } from '../../lib'

type Props = {
    warehouse:WarehouseModel
}
export const ActionsCell: FC<Props> = ({ warehouse }) => { 
  const dispatch: AppDispatch = useDispatch()
  const request = useRequest()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const notify = () => toast.success("Suppresion Effectuée");
  const [loading , setLoading]= useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
  try {
    setLoading(true)
    const response = await deleteWarehouseById(warehouse?.id)
    dispatch(fetchWarehouses(request))
    console.log(response)
    notify()
    setIsModalOpen(false);
  } catch (error) {
     toast.error("Suppresion no Effectuée , un erreur possible")
  } finally {
     setLoading(false)
  }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }; 

  const onEditSingleBank = () => {
    navigate(`edit/${warehouse.id}`, {
      state : warehouse
    })
  }
  return (
    <div className='flex justify-center'>
        <FiEdit3 onClick={onEditSingleBank} className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <BsTrash onClick={() => showModal()} className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <Modal
        maskClosable={false}
        centered
        title= {<span className='text-black font-bold text-[16px]'>Suppresion</span>}
        open={isModalOpen}
        onOk={handleOk} onCancel={handleCancel}
        okText={loading ? <Spinner/>: "J'ai compris"}
        cancelText= "Annuler"
        okButtonProps={{className:"!text-center !bg-[#DD1016] !h-[40px]"}}
        cancelButtonProps={{className:"!text-center !h-[40px]"}}
         
       
      >
        <p>Vous etes sur de supprimer le dd {warehouse.id} </p>
      </Modal>
    </div>
  )
}
