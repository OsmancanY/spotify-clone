import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify"
import SpotifyWebApi from 'spotify-web-api-js';
import MainApp from './MainApp';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((currentUser)=>{
        dispatch({
          type: "SET_USER",
          user: currentUser,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });


      
    }
     spotify.getPlaylist("6rqhFgbbKwnb9MLmUQDhG6").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );



  }, []);



  return (
    <div className="App">
      {token ? <MainApp /> : <Login />}
    </div>
  );
}

export default App;
