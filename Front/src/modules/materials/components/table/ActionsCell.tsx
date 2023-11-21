import {FC,useState} from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BankModel } from '../../core/models/bank.model'
import { deleteBankById } from '../../core/requests/delete_requests'
import Spinner from '@/shared/components/Spinner'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/apps/store'
import { fetchBanks } from '../../core/actions'
import { useRequest } from '../../lib'

type Props = {
    bank:BankModel
}
export const ActionsCell: FC<Props> = ({ bank }) => { 
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
    const response = await deleteBankById(bank.id)
    dispatch(fetchBanks(request))
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
    navigate(`edit/${bank.id}`, {
      state : bank
    })
  }
  return (
    <div className='flex justify-center'>
        <FiEdit3 onClick={onEditSingleBank} className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <GoTrashcan onClick={() => showModal()} className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
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
        <p>Vous etes sur de supprimer le dd {bank.entitled} </p>
      </Modal>
    </div>
  )
}
