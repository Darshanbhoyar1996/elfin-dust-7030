import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="a">
    
    <BrowserRouter>
    <AllRoutes/>
  </BrowserRouter>
    </div>
  );
}

export default App;
