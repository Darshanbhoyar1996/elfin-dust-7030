import React from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';
import Navbar from './components/Navbar';
import Workoutneed from './components/Workoutneed';

function App() {
  return (
    <div className="a">
    
        <Navbar/>
        <DisplayCard/>
        <Workoutneed/>
    </div>
  );
}

export default App;
