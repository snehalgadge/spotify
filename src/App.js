import React, { useEffect, useState } from 'react'
import Login from './Login.js'
import { getTokenUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.js';

const spotify = new SpotifyWebApi();

const App = () => {

  const[token,setToken] = useState(null);
  // to keep track of url
  useEffect ( () =>{

    const hash = getTokenUrl;
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) setToken(_token);
    spotify.setAccessToken(_token);

    spotify.getMe().then(user =>{
      console.log('😆',user);
    })

  },[])

  return (
    <div className='app'> 
    {
      token ? (
        <Player />
      ) : (
        <Login />
      )
    }
    
    </div>
  )
}

export default App