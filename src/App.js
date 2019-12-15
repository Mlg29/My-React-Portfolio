import React from 'react';

import Portfolio from "../src/my-portfolio/Portfolio"
import './App.css';
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <div className="">
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
