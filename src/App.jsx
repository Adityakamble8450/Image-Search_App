// App.js
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componats/Home";
import Saved from "./Componats/Saved";

const App = () => {
  const [receivedData, setReceivedData] = useState([]);

  // Function to receive data from Home and update the state
  const receiveDataFromHome = (data) => {
    setReceivedData(data); // Store the received data in state
  };
  console.log(receivedData);

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("Image"));
    if (Data) {
      setReceivedData(Data);
    }
  }, [receivedData]);

  useEffect(() => {
    if (receivedData.length !== 0) {
      const json = JSON.stringify(receivedData);
      localStorage.setItem("Image", json);
    }
  }, [receivedData]);

  return (
    <div className="w-full  min-h-screen  p-5  bg-[#000]">
      <Routes>
        <Route
          path="/"
          element={<Home sendDataToApp={receiveDataFromHome} />} // Pass the callback function as prop
        />
        <Route path="/saved" element={<Saved data={receivedData} />} />
      </Routes>
    </div>
  );
};

export default App;
