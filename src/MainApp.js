import React from 'react';
import "./MainApp.css"
import MainPage from './MainPage';
import PlaylistBar from './PlaylistBar';

function MainApp({spotify}) {
     
        return (
            <div className='mainApp'>
                <div className='mainApp_body'>
                <PlaylistBar/>
                <MainPage spotify={spotify}/>
                </div>
            </div>
            
        );
    
}

export default MainApp;