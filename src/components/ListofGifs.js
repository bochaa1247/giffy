import React, {useState,useEffect} from "react";
import Gif from './Gif'
import getGifs from '../services/getGifs'
import './ListofGifs.css'

function ListOfGifs ({gifs}) {
  

    {
       return <div className="ListOfGifs">{  
            gifs.map(({id,title,url}) =>
            <Gif
                key={id}
                title={title}
                url={url}
                id={id}
      
              /> ) 
              
            }
            
          </div>

    }



}
export default React.memo(ListOfGifs)