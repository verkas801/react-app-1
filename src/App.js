import './App.css';
import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  const data = {
    carts : [
      {id:1,name:"Yuhuu"},
      {id:2,name:"Yahaa"},
      {id:3,name:"Yehee"}
    ]
  };

  return (
      <React.Fragment>
      <Navbar />
      <Content 
        carts={data.carts} 
      />
      </React.Fragment>
  );
}

function alert()
{
  alert("ble");
}

export default App;
