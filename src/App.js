import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.js';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  //dispatch used to update the data layer
  const [{user, token}, dispatch] = useDataLayerValue();
  

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcPeiTmYzLQqK').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

    }

  },[]);


  console.log(user)




  return (
    <div className="app">

      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
     


    </div>
  );
}

export default App;
