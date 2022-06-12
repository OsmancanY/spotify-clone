import React from 'react';
import "./MainPage.css";
import { useDataLayerValue } from "./DataLayer";


function MainPage() {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return(
        <div className='mainPage'>
           
        
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