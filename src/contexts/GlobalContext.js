import React, { createContext, Component } from 'react';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
    state = { 
        mypokemons:[]
    }

    constructor(props){
        super(props);
        const localData = localStorage.getItem('states');
        this.state = localData ? JSON.parse(localData) : this.state;
    }
    
    addData = (data,state) => {
        let newData = this.state[state];
        if(Array.isArray(newData)) newData.push(data);
        else newData = data;
        this.setState({
            [state]:newData
        },()=>{this.storeData()});
    }

    storeData = () => {
        localStorage.setItem('states',JSON.stringify(this.state));
    }

    removeData = (data,key=null,state) => {
        let newData;
        if(key) newData = this.state[state].filter(pokemon => pokemon[key]!==data);
        else newData = data;
        this.setState({
            [state]:newData
        },()=>{this.storeData()});
    }

    render() { 
        console.log(this.state);
        return ( 
            <GlobalContext.Provider value={{...this.state, addContext: this.addData, removeContext: this.removeData}}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}
 
export default GlobalContextProvider;