import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return  <button onClick={() => window.scrollTo(0, 0)} className="text-center rounded-full mt-5 py-3 px-4 bg-slate-200 text-lg mx-auto ">Back to Top</button>
};

export default ScrollToTop;