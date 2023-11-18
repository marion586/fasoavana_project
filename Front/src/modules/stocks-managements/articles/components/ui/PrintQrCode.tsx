/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Modal } from "antd";
import { useState } from "react";
//import jsPDF from "jspdf";
import { GET_PRINT_QRCODE_URL } from "../../core/requests/_get_print_request";
//import { exportPDFHandler } from "@/shared/libs/export";
import Loading from "@/shared/components/Loading";
import api from "@/shared/api/ApiHelper";

export const PrintQrCode = ({
  open,
  setOpen,
  qrcode,
}: {
  open: boolean;
  setOpen: Function;
  qrcode?: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleDownload = async () => {
    setLoading(true)
    api.get(GET_PRINT_QRCODE_URL(qrcode?.id), { responseType: 'blob' ,headers:{'Content-Type':"application/pdf"}})
    .then(response => {
      const contentDisposition = response?.headers['content-disposition'];
      const filename = contentDisposition?.split('filename=')[1];
      console.log("filename",filename);
      const url = window?.URL?.createObjectURL(new Blob([response?.data]));
      const a = document?.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setLoading(false)
    })
    .catch(error => {
      console.error('Error downloading image:', error);
      setLoading(false)
    });
  };
  return (
    <div>
      <Modal
        open={open}
        title={
          <div className="flex justify-center">
            {" "}
            Article - Impression QrCode
          </div>
        }
        closable={false}
        footer={null}
        centered
        width={"50%"}
      >
        <div className="py-5 flex justify-center">
          {qrcode?.qrcode && <img src={`data:image/${qrcode?.qrcode}`} />}
        </div>
        <div className="flex justify-center gap-5 mb-8">
          <button
            className="lv-btn-light h-[45px] w-[150px] bg-[#5e627800] text-red-600 font-semibold border-red-600 border-[2px] rounded-[3px] shadow-md"
            onClick={() => setOpen(false)}
          >
            Annuler
          </button>
          <button
            onClick={handleDownload}
            className="lv-btn-primary h-[45px] w-[150px] bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            Imprimer
          </button>
        </div>
      </Modal>
      <Loading loading={loading} />
    </div>
  );
};
