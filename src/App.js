// -- Dependencies/Libraries
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import GlobalContextProvider from './contexts/GlobalContext';
// --

// -- Pages
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import MyPokemon from './pages/MyPokemon';
import PokemonProfile from './pages/PokemonProfile';

// --

// -- Components
import NavbarComponent from './components/Navbar';
// --

// -- Addons/External
import './App.css';
import background from './bg-3.jpg';
import { BASE_PATH } from './constants/constant';
// --

function App() {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri : 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache
  });

  return (
    <GlobalContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter basename={BASE_PATH}>
          <NavbarComponent />
          <div className="App">
            <div className="container-fluid" style ={ { backgroundImage: "url("+background+")" } }>
              <header>
                <Switch>
                  <Route 
                    exact path='/'
                    component = {Home}
                  />
                  <Route 
                    exact path='/pokemon/list'
                    component = {PokemonList}
                  />
                  <Route 
                    exact path='/mypokemon/list'
                    component = {MyPokemon}
                  />
                  <Route 
                    exact path='/pokemon/list/detail/:name'
                    component = {PokemonProfile}
                  />
                  <Redirect to='/' />
                </Switch>
              </header>
            </div>
          </div>  
        </BrowserRouter>
      </ApolloProvider>
    </GlobalContextProvider>
  );
}

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

export default App;
