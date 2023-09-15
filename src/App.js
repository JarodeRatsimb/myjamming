import { useState } from "react";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import PlayList from "./components/PlayList";
import "./styles/App.css";

function App() {
  const [tracks, setTracks] = useState([
    {
      title: "The sun is in your eyes",
      artist: "Jacob Collier",
      album: "Genius",
    },
    { title: "When we were young", artist: "Adele", album: "ageX" },
  ]);
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [search, setSearch] = useState("");

  const addToPlaylist = (track) => {
    setUserPlaylist((prevPlaylist) => {
      if (prevPlaylist.includes(track)) return prevPlaylist;
      return [...prevPlaylist, track];
    });
  };

  const deleteFromPlaylist = (id) => {
    setUserPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.title !== id)
    );
  };

  const searchValue = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <Banner />
      <SearchForm searchValue={searchValue} />
      <div className="flex-box">
        <Results tracks={tracks} addToPlaylist={addToPlaylist} />
        <PlayList
          tracks={userPlaylist}
          deleteFromPlaylist={deleteFromPlaylist}
        />
      </div>
    </div>
  );
}

export default App;
