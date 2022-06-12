import React from 'react';
import "./MainApp.css"
import MainPage from './MainPage';
import PlaylistBar from './PlaylistBar';

function MainApp() {
     
        return (
            <div className='mainApp'>
                <div className='mainApp_body'>
                <PlaylistBar/>
                <MainPage/>
                </div>
            </div>
            
        );
    
}

export default MainApp;