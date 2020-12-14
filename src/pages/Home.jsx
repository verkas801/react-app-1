import React from 'react';
import logoStore from '../images/pokeball.svg';
import { Link } from 'react-router-dom';

import { BASE_PATH } from '../constants/constant';

const Home = () => {
    return ( 
        <div>
            <div className="row justify-content-center pt-4">
                <div className="col-10 col-md-8 col-lg-8">
                    <div className="mycard col-12 mt-2">
                        <div className="col-12 align-self-center">
                            <img src={logoStore} className="img-home" alt="logoStore"/>
                        </div>
                        <div className="row">
                            <p className="title-profile">Welcome to PokeStore</p>
                            <p className="title-profile">Lets Catch & Collect Pokemons Here</p>
                        </div>
                        <div className="col-12 align-self-center">
                            <Link className="btn btn-warning btn-sm" to={BASE_PATH+"/pokemon/list"}>Getting Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;