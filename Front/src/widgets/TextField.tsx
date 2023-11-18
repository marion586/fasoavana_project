import {FC} from 'react'
type Props = {
  type: string
  id?: string,
  name: string,
  className: string,
  placeholder?:string,
}
const TextField: FC<Props> = ({type="text",id,name,className="",placeholder=""}) => {
  return (
    <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
     />
  )
}

export default TextField