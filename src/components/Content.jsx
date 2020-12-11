import React, { Component } from 'react';
import logo from './../logo.svg';
import Card from './Card';

const Content = (props) => {

    return ( 
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <div className="row">
            {props.carts.map(data => <Card key={data.id} name={data.name}/> )}
            </div>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
     );
}
 
export default Content;