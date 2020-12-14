// -- Dependencies/Libraries
import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../images/pokeball.svg';
import logoPokemon from '../images/pikachu.svg';
import logoStore from '../images/pokecenter.png';
import {NavLink,Link} from 'react-router-dom';
// --

const NavbarComponent = () => {
    return ( 
        <Navbar collapseOnSelect sticky="top" expand="true" bg="dark" variant="dark">
            <Link to='/' style={{ textDecoration: 'none' }}><Navbar.Brand className="m-2"><img width="60px" height="50px" src={logo} alt="logo"></img>PokeStore</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="m-2" to='/pokemon/list' style={{ textDecoration: 'none',color:'#fff' }}><img width="35px" height="35px" src={logoStore} alt="logoPokemon"></img> Store</Link>
                    <Link className="m-2" to='/mypokemon/list' style={{ textDecoration: 'none', color:'#fff' }}><img width="35px" height="35px" src={logoPokemon} alt="logoPokemon"></img> My Pokemon</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavbarComponent;