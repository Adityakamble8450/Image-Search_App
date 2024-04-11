import React from "react";
import Navabar from "./Navabar";
import { useNavigate,  } from "react-router-dom";
const Saved = ({ data }) => {
  const navigate = useNavigate()
  const back =()=>{
    navigate('/')
  }
  console.log(data);
  return (
    <div className="w-full min-h-screen">
      <button onClick={back} className="py-2 px-3 bg-slate-500 text-white rounded-lg hover:bg-slate-700 font-semibold">Back</button>
      <h1 className="m-5 font-semibold text-2xl text-white">Saved Images</h1>
      <div className="flex gap-4 flex-wrap">
        {data.length > 0 ? (
          data.map((el, id) => (
            <div
              key={id}
              class="max-w-[20vw] h-[20vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img  className="rounded-t-lg h-full w-full object-cover" src={el.src.original} alt="" />
              </a>
            </div>
          ))
        ) : (
          <h1 className="text-center font-medium text-3xl text-yellow-300 tracking-tighter leading-none t text">
            Sorry you don't have any Images saved.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Saved;
