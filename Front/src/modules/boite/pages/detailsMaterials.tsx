import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MaterialService from "../core/services/_requests";
import Loading from "@/shared/components/Loading";
import Button from "@/shared/components/button";
import { BiArrowBack, BiEdit } from "react-icons/bi";

import { GoTrashcan } from "react-icons/go";
import { Modal } from "antd";
import { toast } from "react-toastify";
import Spinner from "@/shared/components/Spinner";
import BackButton from "@/shared/components/backButton";

const DetailsMaterials = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [detailsData, setDetailsData] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notify = () => toast.success("Creation de materiels Effectuée");
  const { idMaterial } = useParams();
  const handleOk = async () => {
    try {
      setLoading(true);
      const response = await MaterialService.deleteMaterialById(
        detailsData._id
      );
      notify();
      setIsModalOpen(false);
      navigate(-1);
    } catch (error) {
      toast.error("Ajout non Effectuée , un erreur possible");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getMaterialById = async (id: any) => {
    setLoading(true);
    true;
    try {
      const mat = await MaterialService.getMaterialById(id);
      if (mat) {
        console.log(mat.data.data);

        setDetailsData(mat.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSingleEdit = () => {
    navigate(`/materials/edit/${detailsData._id}`, {});
  };
  useEffect(() => {
    if (idMaterial) {
      getMaterialById(idMaterial);
    }
    console.log("idMaterial", idMaterial);
  }, []);

  if (loading) return <Loading loading={loading} />;
  return (
    <div className="bg-white py-3 px-4 w-[99%]">
      <div className="flex justify-start gap-[10%] items-center">
        <BackButton />
        <h1 className="text-[20px] font-[500] text-black">
          {" "}
          Details du materiel nomée : {detailsData?.name}
        </h1>
      </div>
      <div className="mt-3 p-10 flex gap-12">
        <div className="" style={{ flexBasis: "40%" }}>
          <img src={detailsData.image} alt="" />
        </div>
        <div className="flex-basis-[50%] first-letter:">
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Nom:
            </span>{" "}
            <span>{detailsData.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Description:
            </span>{" "}
            <p>{detailsData.description}</p>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Marque:
            </span>{" "}
            <span>{detailsData.marque}</span>
          </div>

          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Couleur:
            </span>{" "}
            <span>{detailsData.color}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Category:
            </span>{" "}
            <span>{detailsData.category}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Date de creation:
            </span>{" "}
            <span>{detailsData.created_at}</span>
          </div>
          <div className="flex gap-2">
            <span className="bold" style={{ fontWeight: "bold" }}>
              Status:
            </span>{" "}
            <span>{detailsData.status}</span>
          </div>
          <div className="flex m-10 gap-2">
            <Button
              handleClick={handleSingleEdit}
              icon={<BiEdit />}
              text="Editer"
            />
            <Button
              handleClick={() => setIsModalOpen(true)}
              icon={<GoTrashcan />}
              text="Supprimer"
            />
          </div>
          <Modal
            maskClosable={false}
            centered
            title={
              <span className="text-black font-bold text-[16px]">
                Suppresion
              </span>
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={loading ? <Spinner /> : "J'ai compris"}
            cancelText="Annuler"
            okButtonProps={{
              className: "!text-center !bg-[#DD1016] !h-[40px]",
            }}
            cancelButtonProps={{ className: "!text-center !h-[40px]" }}
          >
            <p>Vous etes sur de supprimer le materiels {detailsData.name} </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DetailsMaterials;
