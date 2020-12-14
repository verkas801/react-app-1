// -- Dependencies / Libraries
import React, {useContext } from 'react';
import CardComponent from './../components/Card';
import { GlobalContext } from '../contexts/GlobalContext';
import { Link } from 'react-router-dom';
import { FaRegFutbol } from 'react-icons/fa';
// --

import { BASE_PATH } from '../constants/constant';

const MyPokemon = (props) => {
    const { mypokemons, removeContext } = useContext(GlobalContext);
    const release = (pokemon) => {
        const { nickName } = pokemon;
        if(window.confirm("Are you sure want to release "+nickName+"?")){
            removeContext(nickName,'nickName','mypokemons');
            alert(nickName+" has been released");
        }
    }
    return ( 
        <div>
            <div className="row">   
                <div className="row m-2">
                    {mypokemons.length>0 ? 
                        mypokemons.map(data => <CardComponent key={data.nickName} data={data} release={release}/> ) : 
                        <div className="row justify-content-center">
                            <div className="row justify-content-center">
                                <p className="title-profile">You don't have any pokemons, let's catch them</p>
                            </div>
                            <div className="row justify-content-center col-4 col-md-3 col-lg-2">
                                <Link className="btn btn-primary btn-sm" to={BASE_PATH+"/pokemon/list"}><FaRegFutbol/> Catch</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default MyPokemon;