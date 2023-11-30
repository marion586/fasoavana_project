/* eslint-disable react-hooks/exhaustive-deps */
import { LvCard } from "@/shared/components/LvCard";
import LvHearder from "@/shared/components/LvHeader";
import { SearchGloblal } from "../components/form/SearchGlobal";
import { Pagination } from "../components/pagination";
import { Table } from "../components/table";
import { AppDispatch } from "@/apps/store";
import { useRequest } from "../lib";
import { useEffect, useState } from "react";
import { fetchMaterials } from "../core/actions";
import { toast } from "react-toastify";
//import { setBankReset } from "../core/reducers/bank.reducer"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setMateriels } from "../core/reducers/bank.reducer";
import { Modal } from "antd";
import Select from "react-select";
import Spinner from "@/shared/components/Spinner";
import { AiOutlineUserAdd } from "react-icons/ai";
import MaterialService from "../core/services/_requests";
import { selectCustomStyle } from "@/shared/libs/FormHelpers";
import Loading from "@/shared/components/Loading";
import BackButton from "@/shared/components/backButton";

const List = () => {
  const location: any = useLocation();
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("Ajout de matériel Effectuée ");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [materialData, setMaterialData] = useState([]);
  const navigate = useNavigate();
  const [materialToUpdate, setMaterialToUpdate] = useState("");
  console.log("state", location.state);
  const dispatch: AppDispatch = useDispatch();
  const request = useRequest();
  const fetchBoitesData = async () => {
    if (location.state._id) {
      await dispatch(fetchMaterials(location.state._id));
      // dispatch(setMateriels(location.state._id));
    }
  };

  const fetchAllMaterials = async () => {
    setLoading(true);
    try {
      const response = await MaterialService.getAllMaterials();
      if (response?.data?.data) {
        const filteredData = response?.data?.data.filter(
          (d: any) => d.status === "disponible"
        );
        if (filteredData?.length) {
          const newData = filteredData.map((d: any) => ({
            id: d._id,
            value: d.name,
            label: d.name,
          }));
          setMaterialData(newData);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMaterials();
  }, []);

  useEffect(() => {
    fetchBoitesData();
  }, [dispatch, request]);

  const handleSearch = (e: any) => {
    console.log(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      if (materialToUpdate) {
        setLoading(true);
        const response = await MaterialService.updateMaterialById(
          materialToUpdate,
          { id_boite: location.state._id, status: "occupée" }
        );
        if (response) {
          console.log(response);
        }
        fetchAllMaterials();
        fetchBoitesData();
        const dataMat = materialData.filter(
          (d: any) => d.id !== materialToUpdate
        );
        setMaterialData(dataMat);
        // console.log(response);
        notify();
      }
    } catch (error) {
      toast.error("Suppresion no Effectuée , un erreur possible");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (loading) return <Loading loading={loading} />;
  return (
    <LvCard>
      <div className="flex justify-between items-center w-full">
        <BackButton />
        <div className="text-[16px] font-semibold text-black">
          Liste des boites
        </div>
        <div className={"flex justify-end"}>
          <button
            onClick={showModal}
            className="flex items-center justify-center gap-2 py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md"
          >
            <AiOutlineUserAdd className="h-6 w-6" />
            <span>Ajouter Materiels </span>
          </button>
        </div>
      </div>
      <SearchGloblal handleSearch={handleSearch} />
      <Table />
      <Pagination />
      <Modal
        maskClosable={false}
        centered
        title={
          <span className="text-black font-bold text-[16px]">
            Ajout de materiels
          </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={loading ? <Spinner /> : "Créer"}
        cancelText="Annuler"
        okButtonProps={{ className: "!text-center !bg-[#DD1016] !h-[40px]" }}
        cancelButtonProps={{ className: "!text-center !h-[40px]" }}
      >
        <div className="basis-[32%]">
          <div className="mb-[10px]">
            <label htmlFor="category" className="label uppercase">
              materiels
            </label>
          </div>
          <Select
            id="category"
            options={materialData}
            styles={selectCustomStyle}
            className="w-full"
            required={true}
            isClearable={true}
            value={materialData[0]}
            onChange={(c: any) => setMaterialToUpdate(c.id)}
            placeholder="-- Selectionner --"
            isSearchable
          />
        </div>
      </Modal>
    </LvCard>
  );
};

export default List;
