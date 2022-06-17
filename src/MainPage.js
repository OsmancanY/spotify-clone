import React from 'react';
import "./MainPage.css";
import Header from './Header';
import { useDataLayerValue } from "./DataLayer";


function MainPage({spotify}) {
    const [{ discover_weekly }] = useDataLayerValue();
    return(
        <div className='mainPage'>
        <Header spotify={spotify}/>
           
        <div className="page_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="page_infoText">
          <strong>PLAYLIST</strong>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

    </div>
    );
}

export default MainPage;