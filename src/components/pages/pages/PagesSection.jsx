import React from 'react'
import About from './about/About';
import Service from './service/Service';

import {Routes, Route} from 'react-router-dom'
export default function PagesSection() {
  return (
    <div>
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
    </div>
  );
}
