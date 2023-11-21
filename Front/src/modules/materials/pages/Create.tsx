/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from "antd";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IdentificationForm } from "../components/form/IndetificationForm";
import { ContactForm } from "../components/form/ContactForm";
import { useParams } from "react-router-dom";
import { getBankById } from "../core/requests/get_requests";
import Loading from "@/shared/components/Loading";
  

const Create = () => {
  const { idBank } = useParams()
  const [idBankForContact, setIdBankForContact] = useState<any | null>(idBank?idBank:null);
  const [activeTab, setActive] = useState<string>("IDENTIFICATION");
  const [editBank, setEditBank] = useState<any | null>(null);
   const [editContact, setEditContact] = useState<any | null>({
    firstname: "",
    lastname: "",
    phone: "+",
    email: "",
    civility: "",
    country: ""
  }
  );
  const [loading, setLoading] = useState<any | null>(false);
  const onUpdate = (activekey: string) => {
    if (!idBankForContact) {
       alert("veillez créer une Indentification ")
     }
    else {
      setActive(activekey); //"IDENTIFICATION" | "CONTACT"
    }
  };

  const fetchBankById = async (id: string) => {
    setLoading(true)
  try {
    const {data} = await getBankById(id)
    if (data) {
    
      const editedData = {abbreviation:data.abbreviation,
      entitled:data.entitled,
      interlocutor:data.interlocutor,
      address:data.address,
      complement:data.complement,
      city:data.city,
      region:data.region,
      postalCode:data.postalCode,
      phone:data.phone,
      email:data.email,
      website: data.website,
      }

      setEditBank(editedData)
      setEditContact((prev:any) => {
        const bankContacts:any = data.bankContacts
        const newEditedContact = {
          ...prev,
          id:bankContacts[0]?.id || null,
          firstname: bankContacts[0]?.firstname || "",
          lastname: bankContacts[0]?.lastname || "",
          phone: bankContacts[0]?.phone || "",
          email: bankContacts[0]?.email || "",
          country: `/countries/${bankContacts[0]?.country?.id}` || "",
          civility: `/civilities/${bankContacts[0]?.civility?.id}` || "",
        }
        return newEditedContact
       })
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
  }
  useEffect(() => {
    if (idBank) {
    fetchBankById(idBank)
  }},[])

  const onHandleAddContact = (id: number) => {
    setIdBankForContact(id)
    setActive("CONTACT")
  }
  if (loading) return <Loading loading={loading} />

  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      <div>
        <h1 className="text-[20px] font-[500] text-black">   Banques - {idBank ? <>Modifier</> : <>Nouveau</>} </h1>
      </div>
      <div className="mt-3">
        <Tabs
          defaultActiveKey="1"
          size={"small"}
          activeKey={activeTab}
          style={{ marginBottom: 32 }}
          onTabClick={onUpdate}
          items={[
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "IDENTIFICATION"
                    }
                  )}
                >
                  IDENTIFICATION
                </span>
              ),
              key: "IDENTIFICATION",
              children: <IdentificationForm handleAddContact={onHandleAddContact} editData={editBank} />,
            },
            {
              label: (
                <span
                  className={clsx(
                    "uppercase hover:!text-[#FF0000] !text-[#677788] font-light",
                    {
                      "!text-[#677788]": activeTab == "CONTACT",
                    }
                  )}
                >
                  CONTACT
                </span>
              ),
              key: "CONTACT",
              children: <ContactForm idBankForContact={idBankForContact} initialFieldValue={editContact}  />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Create;
