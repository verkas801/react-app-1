import React, { Component } from 'react';
import logo from './../logo.svg';

class Card extends Component {
    state = {
        inputName : ''
    };

    constructor(props){
        super(props);
        this.state.name = props.name;
        this.state.desc = '-';
        this.state.quantity = 0;
    }

    render() { 
        return (
            <div className="col-md-3 m-2">
                <img src={logo} onClick={this.alerts} alt="logo" />
                <button className="btn btn-warning" onClick={this.change}>Change</button>
                <input type="text" onChange={this.onchange} placeholder="Change Name Here..."/>
                <input type="text" ref={input=>this._desc = input} placeholder="Change Desc Here..."/>
                <input type="number" ref={input=>this._qty = input} min="0" step="1" placeholder="Change Quantity Here..."/>
                <p>{this.state.name}</p>
                <p>{this.state.desc}</p>
                <p>{this.state.quantity}</p>
            </div>
        );
    };

    alerts = () => {
        alert(this.state.name);
    }

    onchange = (e) => {
        this.setState({input:e.target.value});
    }
    
    change = () => {
        this.setState({name:this.state.input,desc:this._desc.value,quantity:this._qty.value});
    }
}
 
export default Card;