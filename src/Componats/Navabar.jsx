import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

const Navabar = ({queary , setqueary}) => {
  const buttonsData = [
    { title: "Nature" },
    { title: "travel" },
    { title: "City" },
    { title: "Car" },
    { title: "Fashion" },
    { title: "Animals" },
    { title: "Technology" },
    { title: "Tokyo" },
    { title: "Dubai" },
  ];
  return (
    <div className="w-full flex  flex-col items-center">
      <div className="mb-3 md:w-[60vw] w-full flex gap-2 ite items-center justify-center flex-wrap">
        <div className="relative mb-4 flex w-3/4 flex-wrap items-stretch">
          <input
            type="search"
            value={queary}
            onChange={(e)=>setqueary(e.target.value)}
            className="relative text-white m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          

          {/* <!--Search button--> */}

          <button
            className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
         
        </div>
        <Link to={'/saved'} className="text-white font-semibold bg-yellow-500 py-2 px-4 rounded-full">Saved Imeges</Link>
      </div>

      <div className="flex flex-wrap gap-5">
        {buttonsData.map((elem, i) => (
          <button
            key={i}
            onClick={() => setqueary(elem.title)}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {elem.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navabar;
