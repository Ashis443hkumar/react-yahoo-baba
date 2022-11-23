import React from 'react';
import Elements from './element/Elements'
import { Routes, Route} from "react-router-dom";
import FromElements from '../sortCoder/formElements/FormElements';


export default function SortCoder() {
  return (
    <div>
      <Routes>
        <Route path="/elements" element={<Elements/>} />
        <Route path="/fromelements" element={<FromElements/>} />
      </Routes>
    </div>
  );
}
