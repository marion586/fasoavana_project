import LvHearder from "@/shared/components/LvHeader";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Barcode from "react-barcode";
import { BsPrinter } from "react-icons/bs";
type Iprops = {
  boites: any;
  materials: any;
};
const DetailsPages = ({ boites, materials }: Iprops) => {
  console.log(boites, materials);
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Etiquette d'embalage",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });
  return (
    <div>
      <LvHearder showBtn={false} title="Details des etiquettes" to="create" />
      <div className=" flex flex-col items-center gap-2">
        <div
          style={{
            height: "50vh",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "100%",
            padding: 20,
            margin: 32,
          }}
          ref={componentRef as any}
          className=" pass-title flex  flex-col items-center gap-2"
        >
          <h2>
            BOITES REFERENCE :{" "}
            <span className="text-bold" style={{ fontWeight: "bold" }}>
              {boites?.reference}
            </span>
          </h2>
          <h2>
            EMPLACEMENT DU BOITE :{" "}
            <span className="text-bold" style={{ fontWeight: "bold" }}>
              {" "}
              {boites?.location}
            </span>
          </h2>
          <h2>
            NOMBRE DES MATERIELS DANS LA BOITE :{" "}
            <span className="text-bold" style={{ fontWeight: "bold" }}>
              {" "}
              {materials?.length}
            </span>
          </h2>
          <h1>MATERIELS:</h1>
          <ul className="flex flex-col items-center">
            {materials.map((d: any) => (
              <li style={{ fontWeight: "bold" }}>{d.name}</li>
            ))}
          </ul>
          <Barcode width={2} height={50} value={boites._id} />
        </div>

        <button
          onClick={(e) => {
            console.log(e);
            handlePrint();
          }}
          className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
        >
          <BsPrinter className="h-6 w-6" />
          <span>Imprimer en PDF</span>
        </button>
      </div>
    </div>
  );
};

export default DetailsPages;
