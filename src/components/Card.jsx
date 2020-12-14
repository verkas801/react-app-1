// -- Dependencies & Libraries
import React from 'react';
import {Link} from 'react-router-dom';
import { FaSearchPlus, FaRegHandPaper } from 'react-icons/fa';
// --

import { BASE_PATH } from '../constants/constant';

const Card = (props) => {
    const {data, release} = props;
    const {name,image,count,nickName} = data;

    return (
        <div className="col-4 col-md-3 col-lg-2">
            <div className="mycard col-12 mt-2">
                <img className="img-fluid img-resp" src={image} alt={nickName?nickName:name} />
                <div className="row">
                    <span className="title float-center">{name}</span>
                </div>  
                {nickName? <div className="row"><span className="desc float-center">{nickName}</span></div>:""}
                {count!==undefined? 
                    count > 0 ? <div className="row"><span className="badge owned">{"owned : "+count}</span></div>:
                    <div className="row"><span className="badge not-owned">not owned</span></div>:""
                }
                <Link className="btn btn-warning btn-sm mb-3 mt-3" to={{ pathname:BASE_PATH+'/pokemon/list/detail/'+name, prop:data}}><FaSearchPlus/> Detail</Link>&nbsp;
                {nickName?<button className="btn btn-danger btn-sm" onClick={()=>{release(data)}}><FaRegHandPaper/> Release</button>:""}
            </div>
        </div>
    );
}
 
export default Card;