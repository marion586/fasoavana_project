import { FaSearch } from "react-icons/fa";

export const SearchGloblal = () => {
  return (
    <div className="mt-4 mb-3 flex justify-end">
      <div className="flex items-center gap-2 justify-end">
        <div className="h-[16px] w-[16px] text-[#677788]">
          <FaSearch />
        </div>
        <input
          className="peer h-full w-full outline-none text-sm text-[#677788] pr-2"
          type="text"
          id="search"
          placeholder=""
        />
      </div>
    </div>
  );
};
