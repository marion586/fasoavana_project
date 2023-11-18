import {FC} from 'react'
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '@shared/libs/AssetHelpers';
type Props = {
    className?: string
    path: string
    svgClassName?: string
  }

const SVGWidgets: FC<Props> = ({path,className='',svgClassName='w-[128px] h-auto'}) => {
  return (
    <div className={className}>
         <SVG src={toAbsoluteUrl(path)} className={svgClassName}/>
    </div>
  )
}

export default SVGWidgets