import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import Select from "react-select";
export const Pagination = () => {
    const itemsOptions = ItemsPerPageChoices?.map((i) => {
        return {
          value: i?.toString(),
          label: i?.toString(),
        };
    });
    
    /*const updatePage = (Page: number | null, itemsPerPage: number | 10) => {
    };*/
  return (
    <div className="flex justify-between mt-3">
    <div className="flex gap-2 items-center">
      <span>Afficher</span>
      <label>
        <Select
          options={itemsOptions}
          value={{
            value: "10",
            label: "10",
          }}
         /* onChange={(e) => {
            updatePage(1, e?.value ? parseInt(e?.value) : 10);
          }}*/
          styles={selectCustomPagination}
          isSearchable={false}
        />
      </label>
      <div>sur 0</div>
    </div>
    <nav aria-label="Pagination" className="flex justify-end items-center">
      <a className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2 mr-2">
        <span>Préc.</span>
      </a>
      <a className="text-center h-[35px] w-[35px] text-white bg-[#0E3B62] rounded hover:bg-[#0E3B62] mr-3 lv-py-2"> 1 </a>
      <a className=" text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[35px] hover:bg-[#0E3B62] hover:!text-white lv-py-2"> 2 </a>
      <a className="!ml-[8px] text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2">Suiv.</a>
    </nav>
  </div>
  )
}
