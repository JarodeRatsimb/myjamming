import { useState } from "react";
import TrackList from "./TrackList";
import axios from "axios";

function PlayList({ tracks, deleteFromPlaylist, myToken }) {
  const [valInForm, setValInForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPlaylist();
  };

  const createPlaylist = async () => {
    try {
      const responseCreate = await axios.post(
        "https://api.spotify.com/v1/me/playlists",
        {
          name: valInForm,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(responseCreate.data);

      const trackUris = tracks.map((track) => track.uri);
      const responseAdd = await axios.post(
        `https://api.spotify.com/v1/playlists/${responseCreate.data.id}/tracks`,
        {
          uris: trackUris,
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("The playlist was not created", error);
    }
  };
  return (
    <>
      {tracks.length ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setValInForm(e.target.value)}
            value={valInForm}
            required
          />
          <TrackList
            tracks={tracks}
            button="-"
            deleteFromPlaylist={deleteFromPlaylist}
          />
          <button>Save to Spotify</button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default PlayList;
