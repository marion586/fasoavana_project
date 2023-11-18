import {FC,useState} from 'react'
import { QualityModel } from '../../core/models/quality_model'
import { FiEdit3 } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteDataQuality } from '../../core/requests/_del_request'
import Loading from '@/shared/components/Loading'
import { AppDispatch } from '@/apps/store'
import { useAppDispatch } from '@/apps/hooks/app.hooks'
import { fetchQualities } from '../../core/actions'
import { useRequest } from '../../lib'

type Props = {
    quality:QualityModel
}
export const ActionsCell: FC<Props> = ({quality}) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch: AppDispatch = useAppDispatch()
  const request = useRequest();
  const navigate = useNavigate()
  const notify = () => toast.success("Suppresion Effectuer");
  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  }; 

  const deleteQuality =async () => {
    setLoading(true)
    const respo = await deleteDataQuality(quality.id)
    console.log("respo",respo);
    if(respo.status === 204) {
       notify()
    } 
    setIsModalOpen(false)
    dispatch(fetchQualities(request))
    setLoading(false)
    
  }

  return (
    <div className='flex justify-center'>
        <FiEdit3 onClick={() => navigate(`edit/${quality.id}`)} className="w-5 h-5 transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <BsTrash onClick={() => showModal()} className="w-5 h-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
        <Modal
        maskClosable={false}
        centered
        title= {<span className='text-black font-bold text-[16px]'>Suppresion</span>}
        open={isModalOpen}
        onOk={deleteQuality}
        onCancel={handleCancel}
        okText="J'ai compris"
        cancelText= "Annuler"
        okButtonProps={{className:"!text-center !bg-[#DD1016] !h-[40px]"}}
        cancelButtonProps={{className:"!text-center !h-[40px]"}}
         
       
      >
        <p>Vous etes sur de supprimer le  {quality.label} </p>
      </Modal>
      <Loading loading={loading} />
    </div>
  )
}
