import { selectCustomPagination } from "@/shared/libs/FormHelpers";
import { ItemsPerPageChoices } from "@/shared/models/helper";
import Select from "react-select";
import { useRequest, useResponsePagination } from "../../lib";
import { AppDispatch } from "@/apps/store";
import { useAppDispatch } from "@/apps/hooks/app.hooks";
import { setArticleRequest } from "../../core/reducers/article.reducer";
import clsx from "clsx";
export const Pagination = () => {
  const request = useRequest()  
  const dispatch:AppDispatch = useAppDispatch()
    const itemsOptions = ItemsPerPageChoices?.map((i) => {
        return {
          value: i,
          label: i?.toString(),
        };
    });
    
    const updatePage = (page: number,) => {
        if(page === current) return
        dispatch(setArticleRequest({...request,page:page}))
    };
    
    const updateItemPerPage = (itemsPerPage: number | 10) => {
      if(itemsPerPage === request.itemsPerPage) return
      dispatch(setArticleRequest({...request,itemsPerPage:itemsPerPage}))
  };  

  const {current, /*first,*/ totalItems, links,next, previous} = useResponsePagination()
 
  return (
    <div className="flex justify-between mt-3">
    <div className="flex gap-2 items-center">
      <span>Afficher</span>
      <label>
        <Select
          options={itemsOptions}
          value={{
            value: request.itemsPerPage || 10,
            label: request.itemsPerPage?.toString() || "10",
          }}
          onChange={(e) => {
            updateItemPerPage(e?.value ? e?.value : 10);
          }}
          styles={selectCustomPagination}
          isSearchable={false}
        />
      </label>
      <div> sur {totalItems} </div>
    </div>
    <nav aria-label="Pagination" className="flex justify-end items-center">
      <a 
         onClick={() => updatePage(previous)}
         className="text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2 mr-2"
      >
        <span>Préc.</span>
      </a>
      {
        links?.map((link) => (
          <a 
             key={link.page}
             onClick={() => updatePage(link.page)}
             className={clsx("text-center h-[35px] w-[35px] cursor-pointer  rounded hover:bg-[#0E3B62] mr-3 lv-py-2",{"bg-[#0E3B62] text-white": link.active,"bg-[#F8FAFD]  hover:!text-white text-black": !link.active})}
          > 
          {link.page} 
          </a>
        ))
      }
      <a 
         onClick={() => updatePage(next)}
         className="!ml-[8px] text-center text-black  rounded bg-[#F8FAFD]  h-[35px] w-[40px] hover:bg-[#0E3B62] hover:!text-white lv-py-2">
          Suiv.
      </a>
    </nav>
  </div>
  )
}
