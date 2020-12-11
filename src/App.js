import './App.css';
import React from 'react';
import Content from './pages/Content';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';

function App() {
  const data = {
    carts : [
      {id:1,name:"Yuhuu"},
      {id:2,name:"Yahaa"},
      {id:3,name:"Yehee"}
    ]
  };
  console.log(window.location.pathname);
  return (
      <BrowserRouter>
      <Navbar />
      <Route 
        exact path='/'
        component ={withProps(Content,{carts:data.carts})}
      />
      </BrowserRouter>
  );
}

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

export default App;
