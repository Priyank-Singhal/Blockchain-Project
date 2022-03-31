import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayCards from './pages/DisplayCards';
import CurrencyConverter from './pages/CurrencyConverter';


function App() {
  return (
    <BrowserRouter>
    <Routes> 
       
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/displayCards/:id" element={<DisplayCards/>} />
       <Route exact path="/currencyConverter" element={<CurrencyConverter/>} />

    </Routes>

   </BrowserRouter>
    
  )
}

export default App;