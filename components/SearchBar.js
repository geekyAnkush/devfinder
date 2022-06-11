import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = ({ userName, handleClick, userRef }) => {
  return (
    <div className=" align-items mx-auto mt-4 flex max-w-md justify-between space-x-2 rounded-lg bg-gray-200 p-2 pb-2 transition duration-300 ease-in dark:bg-[#2b365e] md:max-w-2xl">
      <SearchIcon className="mt-3 ml-2 h-6 w-6 text-[#5176ff] dark:text-blue-600" />
      <input
        name="search"
        ref={userRef}
        placeholder="Search GitHub username....."
        className="text-md mt-1 w-[400px] rounded-md bg-gray-200 px-2 py-2 font-mono leading-6 text-slate-500 placeholder-neutral-400 transition  duration-300 ease-in focus:outline-none dark:bg-[#2b365e] dark:text-gray-50 dark:placeholder-slate-500"
      />
      <button
        onClick={handleClick}
        className=" text-md mx-auto h-10 rounded-md bg-gray-50 px-4 font-mono font-medium text-blue-600 shadow-xl transition duration-300 ease-in hover:bg-blue-500 hover:text-blue-100 dark:bg-[#5176ff] dark:text-white dark:hover:bg-blue-600 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
