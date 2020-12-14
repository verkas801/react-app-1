// -- Dependencies & Libraries
import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON_DETAIL } from '../graphql/pokemonList';
import { useParams, useLocation } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { FaAngleLeft, FaRegHandPaper, FaRegFutbol } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
// --

const PokemonProfile = (props) => {
    const { addContext,removeContext,mypokemons } = useContext(GlobalContext);
    const { prop } = useLocation();
    const history = useHistory();
    const { name } = useParams();

    const { data:{pokemon = []} = {}, loading, error } = useQuery(GET_POKEMON_DETAIL,{
        variables: {name:name}
    });
    
    if (loading) return <div><p>&nbsp;</p><p>&nbsp;</p></div>;
    if (error) return <p>{error}</p>;

    const {id,image,nickName} = prop;
    const {moves,types} = pokemon;

    let newMoves = [];
    for(let i=0;i<5;i++){
        newMoves.push(moves[i]);
    }

    const chance = () => {
        const rand = Math.random();
        if(rand<0.5) return false;
        return true;
    };

    const catchPokemon = () => {
        if(!chance()) alert("Catch Pokemon Failed, Lets try again. . .");
        else{
            let check,nickName;
            do{
                nickName = prompt("Congrats! You catch a "+name+", Give your new pokemon's nickname");
                if(nickName)
                {
                    check = mypokemons.filter(pokemon=>pokemon.nickName === nickName ).length;
                    if(check) alert("Pokemon's nickname must be unique");
                }
                else{
                    alert("Please give a nickname");
                    check = true;
                }
            }
            while(check);
            addContext({id,name,image,nickName},'mypokemons');
            alert("Your new "+name+" nickname is "+nickName);
            window.location.href = 'react-app-1/mypokemon/list';   
        }
    }

    const release = (pokemon) => {
        const { nickName } = pokemon;
        if(window.confirm("Are you sure want to release "+nickName+"?")){
            removeContext(nickName,'nickName','mypokemons');
            alert(nickName+" has been released");
            window.location.href = 'react-app-1/mypokemon/list';
        }
    }

    return ( 
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="row mt-2">
                        <div className="col-4 mr-auto">
                            <button type="button" onClick={()=>{history.goBack()}} className="btn btn-primary btn-sm"><FaAngleLeft size={30}/>Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-lg-8">
                    <div className="mycard col-12 mt-2">
                        <div className="row">
                            <div className="col-5">
                                <img className="img-fluid img-profile" src={image} alt={name}/>
                                { nickName ? 
                                    <button onClick={()=>{release(prop)}} className="btn btn-danger btn-sm mt-2"><FaRegHandPaper/> Release</button> : 
                                    <button onClick={catchPokemon} className="btn btn-primary btn-sm mt-2"><FaRegFutbol/> Catch</button>
                                }
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <span className="title-profile float-center">{name}</span>
                                    { nickName ? <span className="title float-center">Nickname : {nickName}</span>: ""}
                                </div>
                                <div className="row">
                                    <span className="title float-center">Type :</span>
                                </div>
                                <div className="row">
                                    {types.map(data => <span className="badge" key={data.type.name}>{data.type.name}</span> )}
                                </div>
                                <div className="row">
                                    <span className="title float-center">Moves :</span>
                                </div>
                                <div className="row">
                                    {newMoves.map(data => <span className="badge" key={data.move.name}>{data.move.name}</span> )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PokemonProfile;