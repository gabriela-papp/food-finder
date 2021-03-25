import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import { useGlobalContext } from './context';
import './App.css';

function App() {
  const { venues, location} = useGlobalContext();
  
  
  return (
    <div className="App">
      <Navbar/>
      <Main location={location} venues={venues}/>
    </div>
  );
}

export default App;
