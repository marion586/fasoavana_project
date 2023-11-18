import { LvCard } from "@shared/components/LvCard";
import { toAbsoluteUrl } from "@shared/libs/AssetHelpers";
import SVGWidgets from "@widgets/SVGWidgets";
import { useNavigate } from "react-router-dom";

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
        Bons de réception
      </div>
      <div className="flex justify-between">
        <div>
          <div className="uppercase font-medium text-[10px]">
            N° bon de récéption
          </div>
          <div>BR001</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            Date de réception
          </div>
          <div>05/06/2023</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">Référence</div>
          <div>IMP005SPD/586-23</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">demandeur</div>
          <div>doda</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            Date de livraison
          </div>
          <div>05/06/2023</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            Référence fournisseur
          </div>
          <div>REFF001</div>
        </div>
        <div>
          <div className="uppercase font-medium text-[10px]">
            Nom fournisseur
          </div>
          <div>GAIA</div>
        </div>
      </div>
      <table className="w-full table-fixed border border-black mt-11">
        <thead className="uppercase text-[#204660] font-normal text-[12px]">
          <tr>
            <th className="py-3 text-center">référence article</th>
            <th className="py-3 text-center">désignation</th>
            <th className="py-3 text-center">quantité</th>
            <th className="py-3 text-center">Unité</th>
          </tr>
        </thead>
        <tbody className="uppercase text-[#525A63] font-light text-[12px]">
          <tr className="border border-black mt-11">
            <td className="lv-py-3 lv-px-6 text-center">REFART002</td>
            <td className="lv-py-3 lv-px-6 text-center">cable reseau</td>
            <td className="lv-py-3 lv-px-6 text-center">300</td>
            <td className="lv-py-3 lv-px-6 text-center">M</td>
          </tr>
        </tbody>
      </table>
      <div  className="flex justify-between text-[#303335] mt-2 font-semibold">
        <div>
             <span>Le gestionnaire de stock</span>
        </div>
       <div className="flex justify-end">
            <span>Responsable stock</span>
       </div>
      </div>
      <div className=" flex justify-end mt-5">
        <button
          type="submit"
          onClick={() => navigate('/procurement/receipt-voucher')}
          className="py-2 px-4 h-[46px] !text-[#DD1016]  font-semibold w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          Retour à la liste
        </button>
      </div>
    </LvCard>
  );
};

export default Visualization;
