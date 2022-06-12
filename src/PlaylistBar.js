import React from 'react';
import "./PlaylistBar.css";
import { FaHome, FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi"
import { useDataLayerValue } from './DataLayer';



function PlaylistBar() {


    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="playlistBar">
            <img
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                alt="Spotify logo"
            />
            <h3> <FaHome id="faHome" /> Main Page </h3>
            <h3 id="faSearchh3"> <FaSearch id="faSearch" /> Search </h3>
            <h3 id="biLibraryh3"> <BiLibrary id="biLibrary" /> Library </h3>

           

            {playlists?.items?.map((playlist)=>(<div>{playlist.name}</div>))}


        </div>
    );

}

export default PlaylistBar;