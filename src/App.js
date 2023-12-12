import React, { useEffect, useState } from 'react'
import Login from './components/Login.js'
import { getTokenUrl } from './contextapi/spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player.js';
import { useStateValue } from './contextapi/StateProvider.js';

const spotify = new SpotifyWebApi();

const App = () => {
  const[token,setToken] = useState(null);
  const[{ user },dispatch] = useStateValue();

  // to keep track of url
  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
  
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      setToken(_token);
      spotify.setAccessToken(_token);
  
      spotify.getMe().then((user) => {
        console.log('hello', user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, []);
  
  return (
    <div className='app'> 
    {
      token ? 
        <Player spotify={spotify}/>
      : 
        <Login />
    }
    
    </div>
  )
}

export default App