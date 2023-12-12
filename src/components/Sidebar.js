import React from 'react'
import './sidebar.css'
import logo from '../assets/Spotify_Logo.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


const Sidebar = () => {
  return (
    <div className='sidebar'>
    <img 
    className='sidebar_logo'
    src={ logo } 
    alt='logo' />
    <SidebarOption Icon={HomeIcon} option="Home" />
    <SidebarOption Icon={SearchIcon} option="Search" />
    <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
    <br/>
    <strong className="sidebar_title">PLAYLISTS</strong>
    <hr/>
    </div>
  )
}

export default Sidebar