// -- Dependencies & Libraries
import React, { useContext, useState } from 'react';
import CardComponent from './../components/Card';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON_LIST } from '../graphql/pokemonList';
import { GlobalContext } from '../contexts/GlobalContext';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// --

const PokemonList = (props) => {
    const [opt, setOpt] = useState({limit:14, offset:0});
    const { mypokemons } = useContext(GlobalContext);
    const { data:{pokemons = []} = {}, loading, error } = useQuery(GET_POKEMON_LIST,{
        variables: {limit:opt.limit, offset: opt.offset}
    });
    
    if (loading) return <p>Loading</p>;
    if (error) return <p>{error}</p>;

    const {results,count} = pokemons;

    results.forEach((data)=> {
        data.count = mypokemons.filter(pokemon => pokemon.id===data.id).length;
    })

    const setOffset = (status) => {
        let offset = opt.offset+((opt.limit+1)*status);
        setOpt({
            limit:opt.limit,
            offset:offset < 1 ? 1 : offset > count ? count : offset 
        });
    }

    return ( 
        <div>   
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3 mr-auto">
                            <button type="button" onClick={()=>{setOffset(-1)}}  className="btn"><FaAngleLeft size={40} color={'orange'}/></button>
                        </div>
                        <div className="col-3 offset-6 ml-auto">
                            <button type="button" onClick={()=>{setOffset(1)}}  className="btn"><FaAngleRight size={40} color={'orange'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-2">
                {results.map(data => <CardComponent key={data.id} data={data}/> )}
            </div>
        </div>
    );
}

 
export default PokemonList;