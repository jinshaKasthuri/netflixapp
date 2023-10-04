import React from 'react';
import { useState,useEffect } from 'react';
import './Row.css'
import {imageUrl,APIKEY} from '../../Constants/constants';
import axios from '../../axios'
import YouTube from 'react-youtube';

function Row(props) {
  const [movies,setMovies]=useState([])
  const [urlid,seturlid]=useState('')

  useEffect(()=>{
  axios.get(props.url).then(response=>{
  console.log(response.data);
  setMovies(response.data.results)
  }).catch(err=>{
    //alert('network error')
  })
  },[])
  const handleMovie=(id)=>{
   console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      seturlid(response.data.results[0])
    }
  })

  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  
};
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>

        <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>

        
        )}
        
      </div>
      {urlid &&  <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default Row
