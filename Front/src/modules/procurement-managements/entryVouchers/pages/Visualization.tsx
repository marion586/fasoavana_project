/* eslint-disable @typescript-eslint/no-explicit-any */
import { LvCard } from "@shared/components/LvCard";
import { toAbsoluteUrl } from "@shared/libs/AssetHelpers";
import SVGWidgets from "@widgets/SVGWidgets";
import { useNavigate } from "react-router-dom";
import ResultPrice from "../components/form/ResultPrice";

const resultData = [
  {
    label: "POIDS NET",
    amount : 5400000
  },
   {
    label: "POIDS BRUT",
    amount : 5400000
  },
    {
    label: "PRIX DE REVENT HT",
    amount : 5400000
  },
     {
    label: "MARGE HT",
    amount : 5400000
  },
      {
    label: "TOTAL HT",
    amount : 5400000
  }
]

const Visualization = () => {
    const navigate = useNavigate()
    return (
    <LvCard>
      <div className="flex justify-between">
        <img
          src={toAbsoluteUrl("dashboard/img/logo/Spider.png")}
          alt="Logo spider"
          className="w-[173px] h-[74px]"
        />
        <div className="flex items-center">
          <span onClick={() => alert("en cours de développement merci !")}>
            <SVGWidgets
              className="w-[49px] h-[48px]"
              svgClassName="transform hover:scale-125 hover:cursor-pointer w-[49px] h-[48px]"
              path="media/svg/excel-modern.svg"
            />
          </span>
          <span onClick={() => alert("en cours de développement merci !")}>
            <SVGWidgets
              className="w-[49px] h-[48px]"
              svgClassName="mt-1 transform hover:scale-125 hover:cursor-pointer w-[49px] h-[42px]"
              path="media/svg/pdf-modern.svg"
            />
          </span>
        </div>
      </div>
      <div className="text-center uppercase font-bold text-[28px] mb-6">
        Bons d'entrées
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <div className="uppercase font-medium text-[10px]">
            N° BON D'ENTRÉ
          </div>
          <div>BR001</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            DATE DE CREATION
          </div>
          <div>05/06/2023</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">DATE DE RÉCEPTION</div>
          <div>05/06/2023</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">N° BON DE COMMANDE</div>
          <div>BC001</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            N° BON DE RÉCEPTION
          </div>
          <div>BR001</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            INCOTERM
          </div>
          <div>FXW</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            DATE DE LIVRAISON
          </div>
          <div>  05/05/2023 </div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            RÉFÉRENCE FOURNISSEUR
          </div>
          <div>  REFFOO1 </div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            NOM FOURNISSEUR
          </div>
          <div>  GAIA </div>
        </div>
      </div>
      <table className="w-full table-fixed border border-black mt-11">
        <thead className="uppercase text-[#204660] font-normal text-[12px]">
            <tr>
            <th className="py-3 text-center">PRÉFIXE D'ARTICLE </th>
            <th className="py-3 text-center">RÉFÉRENCE ARTICLE</th>
            <th className="py-3 text-center">DÉSIGNATION</th>
            <th className="py-3 text-center">QUANTITÉ</th>
            <th className="py-3 text-center">P.U HT</th>
            <th className="py-3 text-center">CONDITIONNEMENT</th>
          </tr>
        </thead>
        <tbody className="uppercase text-[#525A63] font-light text-[12px]">
          <tr className="border border-black mt-11">
            <td className="lv-py-3 lv-px-6 text-center">REFART002</td>
            <td className="lv-py-3 lv-px-6 text-center">PFXC</td>
            <td className="lv-py-3 lv-px-6 text-center">CABLLE RESEAU</td>
            <td className="lv-py-3 lv-px-6 text-center">300</td>
            <td className="lv-py-3 lv-px-6 text-center">180000</td>
            <td className="lv-py-3 lv-px-6 text-center">METTRE</td>
                
          </tr>
        </tbody>
      </table>
    <div className="flex gap-10 mt-10">
          {resultData.map((item: any, key: number) => (<ResultPrice  key={key} label={item.label} amount={item.amount} />))}
        </div>
        
     
    <div className=" flex justify-between items-end mt-11">
      
      
        <div className="flex flex-col gap-2">
          <label className="text-sm">
            COMMENTAIRE
          </label>
          <textarea className="  lv-input-custom w-[450px] h-[150px]  text-[#677788]"/>
 
      </div>
          <button
          type="submit"
          onClick={() => navigate('/procurement/entry-vouchers')}
          className="py-2 px-4 h-[46px] !text-[#DD1016]  font-semibold w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          Retour à la liste
        </button>
      </div>
    </LvCard>
  );
};

export default Visualization;
