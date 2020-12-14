// -- Dependencies/Libraries
import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../images/pokeball.svg';
import logoPokemon from '../images/pikachu.svg';
import logoStore from '../images/pokecenter.png';
// --

const NavbarComponent = () => {
    return ( 
        <Navbar collapseOnSelect sticky="top" expand="true" bg="dark" variant="dark">
            <Navbar.Brand className="m-2" href="react-app-1/"><img width="60px" height="50px" src={logo} alt="logo"></img>PokeStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="m-2" href="react-app-1/pokemon/list"><img width="35px" height="35px" src={logoStore} alt="logoPokemon"></img> Store</Nav.Link>
                    <Nav.Link className="m-2" href="react-app-1/mypokemon/list"><img width="35px" height="35px" src={logoPokemon} alt="logoPokemon"></img> My Pokemon</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavbarComponent;