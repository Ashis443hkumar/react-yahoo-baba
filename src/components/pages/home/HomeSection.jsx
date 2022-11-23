import React from "react";
import Home1 from "./home1/Home1";
import Home2 from "./home2/Home2";
import Home3 from "./home3/Home3";


import { Routes, Route} from "react-router-dom";

export default function HomeSection() {
  return (
    <>
      <Routes>
        <Route path="/home1" element={<Home1/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/home3' element={<Home3/>}/>
      </Routes>
    </>
  );
}
