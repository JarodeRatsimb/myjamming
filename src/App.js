import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import PlayList from "./components/PlayList";
import SpotifyLogin from "./components/SpotifyLogin";
import Timer from "./components/Timer";
import styles from "./styles/App.module.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [myToken, setMyToken] = useState(null);
  const [valInForm, setValInForm] = useState("");
  const [initialSeconds, setInitialSeconds] = useState(
    localStorage.getItem("initialSeconds") || null
  );

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

  const handleClickNew = () => {
    setTracks([]);
    setUserPlaylist([]);
    setValInForm("");
  };

  const handleChange = (value) => {
    setValInForm(value);
  };

  const handleClearSearch = () => {
    setTracks([]);
    setValInForm("");
  };

  useEffect(() => {
    // Parse the access token from the URL
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get("access_token");

    if (!localStorage.getItem("initialSeconds")) {
      const expiration = parseInt(urlParams.get("expires_in"), 10);

      if (!isNaN(expiration)) {
        setInitialSeconds(expiration);
        localStorage.setItem("initialSeconds", expiration);
      }
    }
    // Store the access token in local storage or state as needed
    setMyToken(accessToken);
  }, []);

  return (
    <div>
      {isCallback ? (
        <>
          <Banner />
          <SearchForm
            searchValue={searchValue}
            myToken={myToken}
            handleChange={handleChange}
            valInForm={valInForm}
          />
          <div className={styles.container}>
            <div className={styles.results}>
              <Results
                tracks={tracks}
                addToPlaylist={addToPlaylist}
                handleClearSearch={handleClearSearch}
              />
            </div>
            <div className={styles.results}>
              <PlayList
                tracks={userPlaylist}
                deleteFromPlaylist={deleteFromPlaylist}
                myToken={myToken}
                handleClickNew={handleClickNew}
              />
            </div>
          </div>
          {initialSeconds !== null ? (
            <Timer initialSeconds={initialSeconds} />
          ) : (
            <p>Loading...</p>
          )}
        </>
      ) : (
        <SpotifyLogin />
      )}
    </div>
  );
}

export default App;
