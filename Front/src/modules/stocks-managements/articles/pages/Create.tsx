/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs } from "antd";
import { useState } from "react";
import { Identification } from "../components/create/identification";
import { FreeFields } from "../components/create/FreeFields";
import clsx from "clsx";
import { Setting } from "../components/create/Setting";
import { Descriptor } from "../components/create/Descriptor";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@/widgets/Box";
import { FormattedMessage } from "react-intl";
import {toast} from "react-toastify"
//import { AppDispatch } from "@/apps/store";
//import { useAppDispatch } from "@/apps/hooks/app.hooks";
//import { resetArticleForm } from "../core/reducers/acticleForm.reducer";
import { useDataBody, useDataBodyFreeField, useDataBodyIndetificator } from "../lib";
import { postArticle } from "../core/requests/_post_request";
import { store } from "@/apps/store";
import { resetArticleForm } from "../core/reducers/acticleForm.reducer";
import Loading from "@/shared/components/Loading";

export const Create = () => {
  const [activeTab, setActive] = useState<string>("A");
  const { idArticle } = useParams();
  const [loading,setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const onUpdate = (activekey: string) => {
    setActive(activekey); //"A" | "B" | "C"
  };

 // const dispatch:AppDispatch = useAppDispatch()
 /* useEffect(() => {
    return () => {
      dispatch(resetArticleForm())
    }
  }, [])*/
  const toastWarn = (message:string) => toast.warn(message)
  const toastError = (message:string) => toast.error(message)
  const toastSuccess = (message:string) => toast.success(message)
  const freeFieldData = useDataBodyFreeField()
  const identificatorData =useDataBodyIndetificator()
  const articleForm = useDataBody()
  const createOrUptate = async(e:any) => {
    e.preventDefault()
    console.log("articleFomr",articleForm);
   if(!freeFieldData.referenceFabriquant || !identificatorData.reference ){
     toastWarn("Il faut que vous completez les champ obligatoire")
     return
   }
    //console.log("articleFomr",articleForm);
    setLoading(true)
    const response = await postArticle(articleForm)
    try {
      if(response?.status === 200 || response?.status === 201 ) {
        toastSuccess("Enregistrement effectuer")
        store.dispatch(resetArticleForm())
        navigate(-1)
      }
      else {
        toastError("Erreur lors traitement du donnees")
      }
    } catch (error: any) {
      toastError(new Error(error).message || "Erreur lors traitement du donnees")
    }
    //console.log(response);
    setLoading(false)
  }
  
  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      {activeTab == "A" && (
        <div>
          <h1 className="text-[20px] font-[500] text-black">
            {idArticle ? "Articles - Fiche" : "Articles - Nouveau"}
          </h1>
        </div>
      )}

      {activeTab == "B" && (
        <div>
          <h1 className="text-[20px] font-[500] text-black">Descriptif</h1>
        </div>
      )}

      {activeTab == "C" && (
        <div>
          <h1 className="text-[20px] font-[500] text-black">Champs libre</h1>
        </div>
      )}

      {activeTab == "D" && (
        <div>
          <h1 className="text-[20px] font-[500] text-black">Paramètre</h1>
        </div>
      )}
      {idArticle && (
        <div className="mt-5">
          <h1 className="text-[16px] mb-2 ml-4 font-bold">Quantités</h1>
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            <Box height="60px" label="Stock global" bgColor={"#84BB5A"} value={10}/>
            <Box height="60px" label="Flottant" bgColor={"#A3D0DE"} value={0}/>
            <Box height="60px" label="Réservées" bgColor={"#33A5C9"} value={0}/>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            <Box height="60px" label="Stock mini" bgColor={"#5A81BB"} value={0}/>
            <Box height="60px" label="Stock d’alerte" bgColor={'#e3a344'} value={0}/>
            <Box height="60px" label="Stock réel" bgColor={"#E31C23"} value={0}/>
          </div>
        </div>
      )}
      <div>
        <Tabs
          defaultActiveKey="1"
          size={"small"}
          style={{ marginBottom: 32 }}
          onTabClick={onUpdate}
          items={[
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "A",
                    }
                  )}
                >
                  IDENTIFICATION
                </span>
              ),
              key: "A",
              children: <Identification />,
            },
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "B",
                    }
                  )}
                >
                  Descriptif
                </span>
              ),
              key: "B",
              children: <Descriptor />,
            },
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "C",
                    }
                  )}
                >
                  Champs libre
                </span>
              ),
              key: "C",
              children: <FreeFields />,
            },
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "D",
                    }
                  )}
                >
                  paramètre
                </span>
              ),
              key: "D",
              children: <Setting />,
            },
          ]}
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex justify-start font-light text-red-500">* Champ Obligatoire</div>
        <div className="flex gap-4 justify-end">
        <button
          type="button"
          className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md "
        >
          <FormattedMessage id="CANCEL" />
        </button>
        <button
          type="button"
          onClick={createOrUptate}
          className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
        >
          <FormattedMessage id="SAVE" />
        </button>
      </div>
      </div>
      <Loading loading={loading} />
    </div>
  );
};
