import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
type Iprops = {
  handleSearch: (e: any) => void;
};

export const SearchGloblal = ({ handleSearch }: Iprops) => {
  return (
    <div className="mt-4 mb-3 flex justify-end h-[40px]">
      <div className="searchbar flex items-center h-full w-full max-w-[300px] ml-10">
        <BiSearch className="text-xl mr-3" />
        <input
          type="text"
          name="search"
          placeholder="Recherche"
          onChange={handleSearch}
          className="bg-transparent w-full h-full px-3 rounded-full hover:bg-white transition-all"
        />
      </div>
    </div>
  );
};
