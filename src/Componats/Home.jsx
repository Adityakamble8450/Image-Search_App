import React, { useEffect, useState } from "react";
import Navabar from "./Navabar";
import axios from "axios";
import { ParallaxScroll } from "./ParrallerScroll";
import ScrollToTop from "./BacktoTop";
import { data } from "autoprefixer";
const Home = ({sendDataToApp}) => {
  const [phots, setphots] = useState([]);
  const [queary, setqueary] = useState("");
  const [loader, setloader] = useState(true);
  const [saved, setsaved] = useState([]);


  const sendDataToParent = () => {
    sendDataToApp(saved); 
  }

  const API_KEY = "B3JesE6KfRCGojd9i41gLcEB9xiIhJPizuVmhL3sKOmLCNcgYihYWLf9";
  const Url = `https://api.pexels.com/v1/search?query=${
    queary ? queary : `nature`
  }&per_page=15`;
  const fetchData = async () => {
    let res = await axios.get(Url, {
      headers: {
        Authorization: API_KEY,
      },
    });
    setloader(false);
    setphots(res.data.photos);
    console.log(res.data.photos);
  };
  useEffect(() => {
    fetchData();
    sendDataToApp(saved)
   




  }, [queary , saved , setsaved]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navabar queary={queary} setqueary={setqueary} />
      <ParallaxScroll
        images={phots}
        loader={loader}
        saved={saved}
        setSeved={setsaved}
      />

      <ScrollToTop />
    </div>
  );
};

export default Home;
