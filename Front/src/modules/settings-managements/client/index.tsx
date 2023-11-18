/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { useState } from "react";
import SVGWidgets from "../../../widgets/SVGWidgets";
import TextField from "../../../widgets/TextField";
import { FormattedMessage } from "react-intl";
import { selectCustomStyle } from "../../../shared/libs/FormHelpers";
//import jwt_decode from "jwt-decode";


const roleOptions: any[] = [
  { value: "", label: "-- Selectionner --" },
  { label: "Utilisateur", value: "USER" },
  { label: "Administrateur", value: "ADMIN" },
  { label: "Autre", value: "OTHER" },
];

const qualityOptions: any[] = [
  { value: "", label: "-- Selectionner --" },
  { label: "Qualité 1", value: "Q1" },
  { label: "Qualité 2", value: "Q2" },
  { label: "Qualité 3", value: "Q3" },
];

const nameOptions: any[] = [
  { value: "", label: "-- Selectionner --" },
  { label: "Name 1", value: "Q1" },
  { label: "Name 2", value: "Q2" },
  { label: "Name 3", value: "Q3" },
];

const firstNameOptions: any[] = [
  { value: "", label: "-- Selectionner --" },
  { label: "Jean 1", value: "Q1" },
  { label: "Jean 2", value: "Q2" },
  { label: "Jean 3", value: "Q3" },
];

const companyOptions: any[] = [
  { value: "", label: "-- Selectionner --" },
  { label: "Smart Dou", value: "Q1" },
  { label: "Livenexx", value: "Q2" },
  { label: "Test", value: "Q3" },
];
const initialOption ={
  value: "",
  label: "-- Selectionner --",
}
/*const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODYzMTYxNzYsImV4cCI6MTY4NjMxOTc3Niwicm9sZXMiOjMsInVzZXJJZCI6ImI2ZjlmYzVmLTc0YjQtNDI5Yi04ODFkLTQ3MWMzMDAyYTg0ZSIsImVtYWlsIjoibmlhdm9AZ21haWwuY29tIiwiZmlyc3ROYW1lIjoicm9qbyIsImxhc3ROYW1lIjoibmlhdm8iLCJ1c2VybmFtZSI6Im5pYXZvQGdtYWlsLmNvbSJ9.EMz2MwLUxf-oKI33Trj7Dr5qIvJhQkKO4Z2wLrHIbedHvJWc5YzcIfUQTrM4agEAFn2nfLd62CRJfIhbXfZmd9vNkyQwnkUzxk-KkmvFf0yhzYY5rDKSpzzdctMOhggLihRqodIz-0wTGY-vEtH0IdrIOuejAT5ZW5VK0MG_rqqj_BfpuRIKog8dIp_qOcJSPHF1w6CUo26ohlbf_x201uAUcnFjtW_qnOWXUwqdL1GA-La9j0B7-pwSRkGgvuwi6X1DbDdVXnVyHrIxufQQsZNqXLuSG8HUT_C_bk1rS5mr6PDTRwDO-z81cphqRr6aoZVVvdutfC-Ww2Dvu2ZBVQ"
const data = jwt_decode(jwt)
console.log("data",data);*/
const Client = () => {
  const [role, setRole] = useState<any>(initialOption);
  const [quality, setQuality] = useState<any>(initialOption);
  const [name, setName] = useState<any>(initialOption);
  const [firstName,setFirstName] = useState<any>(initialOption)
  const [company,setCompany] = useState<any>(initialOption)

  const onChangeRole = (data: any) => {
    if (!data) {
      setRole({ value: "", label: "-- Selectionner --" });
    }
    setRole(data);
  };

  const onChangeQuality = (data: any) => {
    if (!data) {
      setQuality({ value: "", label: "-- Selectionner --" });
    }
    setQuality(data);
  };

  const onChangeName = (data: any) => {
    if (!data) {
      setName({ value: "", label: "-- Selectionner --" });
    }
    setName(data);
  };

  const onChangeFirstName = (data: any) => {
    if (!data) {
      setFirstName(initialOption);
    }
    setFirstName(data);
  };

  const onChangeCompany = (data: any) => {
    if (!data) {
      setCompany(initialOption);
    }
    setCompany(data)
  };
  return (
    <div className=" h-screen bg-white">
      <div className=" md:w-full mx-auto">
        <div className="card-lg">
          <h2 className="font-bold text-xl mb-2"><FormattedMessage id="SETTING.NEW_USER" /> </h2>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <input
                id="supply"
                type="radio"
                name="type"
                className="peer/draft"
              />
              <label htmlFor="supply" className="uppercase">
                supply chain manager
              </label>
            </div>
            <div className="flex gap-1">
              <input id="supply" name="type" type="radio" className="" />
              <label htmlFor="supply" className="uppercase">
                Client
              </label>
            </div>
          </div>
          <div className="flex items-end w-full mt-8 gap-3">
            <div className="basis-[30%]">
              <label htmlFor="file-upload" className="cursor-pointer">
                 <SVGWidgets path="/media/svg/upload_img.svg" />
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>
            <div className="basis-[70%]">
              <div className="flex justify-end gap-4 mb-8">
                <div className="w-full basis-1/2">
                  <label htmlFor="role" className="ml-1">
                    <span className="label-required uppercase">
                      Role
                    </span>
                  </label>
                  <Select
                    options={roleOptions}
                    styles={selectCustomStyle}
                    className="w-full"
                    isClearable={true}
                    value={role}
                    onChange={onChangeRole}
                    placeholder="-- Selectionner --"
                  />
                </div>
                <div className="w-full basis-1/2">
                  <label htmlFor="role" className="ml-1">
                    <span className="label-required uppercase">
                      Qualité
                    </span>
                  </label>
                  <Select
                    options={qualityOptions}
                    styles={selectCustomStyle}
                    className="w-full"
                    isClearable={true}
                    value={quality}
                    onChange={onChangeQuality}
                    placeholder="-- Selectionner --"
                    isSearchable
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-3 gap-3">
            <div className="basis-[30%]">
              <div className="w-full">
                    <label htmlFor="role" className="ml-1">
                      <span className="label-required uppercase">
                        Nom
                      </span>
                    </label>
                    <Select
                      options={nameOptions}
                      styles={selectCustomStyle}
                      className="w-full"
                      isClearable={true}
                      value={name}
                      onChange={onChangeName}
                      placeholder="-- Selectionner --"
                    />
                  </div>
            </div>
            <div className="basis-[70%]">
              <div className="flex items-end justify-end gap-4 mb-8">
                <div className="w-full basis-1/2">
                  <label htmlFor="role" className="ml-1">
                    <span className="label-required uppercase">
                      Prenom
                    </span>
                  </label>
                  <Select
                    options={firstNameOptions}
                    styles={selectCustomStyle}
                    className="w-full"
                    isClearable={true}
                    value={firstName}
                    onChange={onChangeFirstName}
                    placeholder="-- Selectionner --"
                  />
                </div>
                <div className="w-full basis-1/2">
                  <label htmlFor="adresse" className="ml-1">
                    <span className="uppercase">
                      Adresse
                    </span>
                  </label>
                  <TextField
                    type="adresse"
                    id="adresse"
                    name="adresse"
                    className="lv-input-custom"
                    placeholder={"Ex Parvis 17"}
                   />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-1 gap-3">
            <div className="basis-[30%]">
              <div className="w-full">
                    <label htmlFor="telephone" className="ml-1">
                      <span className="uppercase">
                        N° téléphone
                      </span>
                    </label>
                    <TextField
                      type="text"
                      id="telephone"
                      name="telephone"
                      className="lv-input-custom"
                      placeholder={"+523 458 789 564"}
                    />
                  </div>
            </div>
            <div className="basis-[70%]">
              <div className="flex items-end justify-end gap-4 mb-5">
                <div className="w-full basis-1/2">
                  <label htmlFor="email" className="ml-1">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 uppercase">
                      Email
                    </span>
                  </label>
                  <TextField
                      type="email"
                      id="email"
                      name="email"
                      className="lv-input-custom"
                      placeholder={"johmml@gmail.com"}
                    />
                </div>
                <div className="w-full basis-1/2">
                  <label htmlFor="role" className="ml-1">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 uppercase">
                      Societé
                    </span>
                  </label>
                  <Select
                    options={companyOptions}
                    styles={selectCustomStyle}
                    className="w-full"
                    isClearable={true}
                    value={company}
                    onChange={onChangeCompany}
                    placeholder="-- Selectionner --"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-3 gap-3">
            <div className="basis-[30%]">
              <div className="w-full">
                    <label htmlFor="role" className="ml-1">
                      <span className="label-required uppercase">
                        Mot de passe
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="lv-input-custom"
                      placeholder={""}
                    />
                  </div>
            </div>
            <div className="basis-[70%]">
              <div className="flex items-end justify-end gap-4 mb-8">
                <div className="w-full basis-1/2">
                  <label htmlFor="role" className="ml-1">
                    <span className="label-required uppercase">
                       Confirmation mot de passe
                    </span>
                  </label>
                  <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      className="lv-input-custom"
                      placeholder={""}
                    />
                </div>
                <div className="w-full basis-1/2">
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
              <button type="submit" className="py-2 px-4 h-[46px] w-[180px]  lv-btn-light bg-[#5e627800] border-red-600 border-[2px] rounded-[3px] shadow-md ">
                  <FormattedMessage id="CANCEL" />
              </button>
              <button type="submit" className="py-2 px-4 h-[46px] w-[180px] lv-btn-primary bg-[#DD1016] selection:lv-btn-primary  rounded-[3px] shadow-md ">
                  <FormattedMessage id="SAVE" />
              </button>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
