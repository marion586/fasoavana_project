import {FC,useState} from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ArtilceModelItem } from '../../core/models/article.model'
import { BsFileEarmarkText, BsJournalCheck, BsPrinter } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

type Props = {
    article:ArtilceModelItem
}
export const ActionsCell: FC<Props> = ({article}) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const notify = () => toast.success("Suppresion Effectuer");
  /*const showModal = () => {
    setIsModalOpen(true);
  };*/

  const handleOk = () => {
    notify()
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }; 

  const onNavigateToEditArticle =() => {
    navigate("/stocks-management/articles/edit/1")
  }

  const onNavigateToProvider =() => {
    navigate("/procurement/providers/list/article/2")
  }

  return (
    <div className='flex justify-center'>
        <td className="lv-py-3 lv-px-6 flex">
                    <AiOutlineEye onClick={onNavigateToEditArticle} className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <FiEdit3 className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <BsJournalCheck onClick={onNavigateToProvider} className="w-6  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                    <BsFileEarmarkText className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                    <BsPrinter className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110" />
                    <BsTrash className="w-5  transform hover:cursor-pointer hover:text-purple-500 hover:scale-110"/>
                </td> 
        <Modal
        maskClosable={false}
        centered
        title= {<span className='text-black font-bold text-[16px]'>Suppresion</span>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="J'ai compris"
        cancelText= "Annuler"
        okButtonProps={{className:"!text-center !bg-[#DD1016] !h-[40px]"}}
        cancelButtonProps={{className:"!text-center !h-[40px]"}}
         
       
      >
        <p>Vous etes sur de supprimer le  {article?.identification?.reference} </p>
      </Modal>
    </div>
  )
}
