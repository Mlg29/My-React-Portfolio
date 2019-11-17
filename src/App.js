import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
