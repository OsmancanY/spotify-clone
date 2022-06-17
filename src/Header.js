import React from 'react';
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import { FaUser, FaSearch } from "react-icons/fa";
function Header({spotify}) {
    const [{user}]= useDataLayerValue();
    return (
        <div className='header'>
            <div className='header_left'>
                <FaSearch/>
                <input
                    placeholder='Search for Artists, Songs, or Podcasts'
                    type="text"
                />
            </div>
            <div className='header_right'>
                <FaUser alt={user?.display_name} src={user?.images[0].url}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;