import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Banner/Banner';
import Row from './Components/Rowpost/Row';
 import { action,originals } from './Urls';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row url={originals} title= "Netflix originals" />
      
      <Row url={action} title="Action" isSmall/>
      <Row url={action} title="Comedy movies" isSmall/>
      <Row url={action} title="Horror Movies" isSmall/>
      <Row url={action} title="Documentaries" isSmall/>


    </div>
  );
}

export default App;
