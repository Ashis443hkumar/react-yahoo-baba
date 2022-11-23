import React from "react";
import "./style.css";
import Header from './components/common/header/Header'
import HomeSection from './components/pages/home/HomeSection';
import SortCoder from './components/pages/sortCoder/SortCoder'
import PagesSection from './components/pages/pages/PagesSection'


import {BrowserRouter,Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Header/>
         <HomeSection/>
         <SortCoder/>
         <PagesSection/>
      </BrowserRouter>
    </div>
  );
}
