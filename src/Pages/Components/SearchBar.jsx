import { useRef, useContext } from "react";
import { apiData } from "../../App";
const SearchBar = () => {
    const APIdata = useContext(apiData);
    console.log(APIdata)
    let valRef = useRef(null)
  return (
    <div className="search-bar w-screen h-16 top-20 relative flex justify-center items-center py-2 border-b-2 border-slate-700">
      <div className="flex justify-center items-center gap-3 bg-white-500 border-2 border-violet-700 rounded-lg">
        <input
          type="text"
          placeholder="Search your product here"
          ref={valRef}
          className="bg-transparent outline-none px-4 w-80 text-black"
          onKeyUp={()=>{
            console.log(valRef.current.value)
        }}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass px-3 py-2 text-xl bg-violet-700 rounded-md text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
