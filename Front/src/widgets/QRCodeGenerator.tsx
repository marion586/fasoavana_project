/* eslint-disable @typescript-eslint/no-explicit-any */
import { QRCodeCanvas } from "qrcode.react"
import jsPDF from 'jspdf';
import clsx from "clsx";
type Props = {
  value: string,
  isGeneratePdf:boolean
}
export const QRCodeGenerator = ({isGeneratePdf,value=""}:Props) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    const date = new Date()
    const qrCodeDataURL: any = document?.querySelector('canvas')?.toDataURL('image/png');

    doc.addImage(qrCodeDataURL, 'PNG', 10, 10, 50, 50);
    doc.save(`qrcode_${date.getTime()}.pdf`);
  };

  
  return (
    <div className={clsx({"flex":isGeneratePdf,"flex-col":isGeneratePdf})}>
       <QRCodeCanvas value={value}  />
       {
        isGeneratePdf && (
          <button onClick={handleDownload} className=" lv-btn-primary bg-[#7D6060] mt-4 h-[36px] w-[130px] rounded-[3px] shadow-md">
            Imprimer
          </button>
        )
       }
    </div>
    
  )
}
