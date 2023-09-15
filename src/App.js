import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import PlayList from "./components/PlayList";
import SpotifyLogin from "./components/SpotifyLogin";
import "./styles/App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [myToken, setMyToken] = useState(null);

  const isCallback = window.location.hash.startsWith("#access_token=");

  const addToPlaylist = (track) => {
    setUserPlaylist((prevPlaylist) => {
      if (prevPlaylist.includes(track)) return prevPlaylist;
      return [...prevPlaylist, track];
    });
  };

  const deleteFromPlaylist = (id) => {
    setUserPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.id !== id)
    );
  };

  const searchValue = (value) => {
    setTracks(value);
  };

  const addPlaylistTitle = (title) => {
    setPlaylistTitle(title);
  };

  useEffect(() => {
    // Parse the access token from the URL
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get("access_token");

    // Store the access token in local storage or state as needed
    setMyToken(accessToken);

    if (tracks) console.log(tracks);
  }, [myToken, tracks]);

  return (
    <div>
      {isCallback ? (
        <>
          <Banner />
          <SearchForm searchValue={searchValue} myToken={myToken} />
          <div className="flex-box">
            <Results tracks={tracks} addToPlaylist={addToPlaylist} />
            <PlayList
              tracks={userPlaylist}
              deleteFromPlaylist={deleteFromPlaylist}
              addPlaylistTitle={addPlaylistTitle}
              myToken={myToken}
            />
          </div>
        </>
      ) : (
        <SpotifyLogin />
      )}
    </div>
  );
}

export default App;
