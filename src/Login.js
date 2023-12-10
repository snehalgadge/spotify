import React from 'react'
import './Login.css'
import logo from './assets/Spotify_Logo.png'
import { loginUrl } from './Spotify.js'

const login = () => {
  return (
    <div className='login'> 
    {/* spotify logo */}
    <img 
    src={ logo } 
    alt='loGo'/
    >
    {/* login Button */}
    <a href={ loginUrl }>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default login