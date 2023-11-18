import { FaSearch } from 'react-icons/fa'

function SearchGlobal() {
  return (
    <div className="mt-4 flex justify-end ">
    <div className="flex items-center gap-2 justify-end  border-b ">
      <div className="h-[16px] w-[16px] text-[#677788]">
        <FaSearch />
      </div>
      <input
        className="peer h-full w-full outline-none text-sm text-[#677788] pr-2 pb-2"
        type="text"
        id="search"
        placeholder=""
      />
    </div>
  </div>
  )
}

export default SearchGlobal