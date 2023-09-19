import { useState } from "react";
import TrackList from "./TrackList";
import Modal from "./Modal";
import axios from "axios";
import styles from "../styles/Playlist.module.css";

function PlayList({ tracks, deleteFromPlaylist, myToken, handleClickNew }) {
  const [valInForm, setValInForm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [playlistURL, setPlaylistURL] = useState("");

  const openModal = (val) => {
    setIsModalOpen(true);
    setModalMessage(val);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tracks.length) return openModal("Your Playlist cannot be empty!");
    await createPlaylist();
    return openModal("Your Playlist has been created successfully!");
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
      setPlaylistURL(responseCreate.data.external_urls.spotify);

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

      console.log(responseAdd.data);
    } catch (error) {
      console.error("The playlist was not created", error);
    }
  };

  const handleClickRedirect = () => {
    window.location.href = playlistURL;
  };

  const handleClickNewOverride = () => {
    handleClickNew();
    setValInForm("");
    closeModal();
  };

  return (
    <>
      <form className={styles.flexContainer} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className={styles.titleInput}
          id="title"
          name="title"
          onChange={(e) => setValInForm(e.target.value)}
          value={valInForm}
          placeholder="Title"
          required
        />
        <TrackList
          tracks={tracks}
          button="-"
          deleteFromPlaylist={deleteFromPlaylist}
        />
        <button className={styles.button}>Save to Spotify</button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        handleClickRedirect={handleClickRedirect}
        handleClickNew={handleClickNewOverride}
      />
    </>
  );
}

export default PlayList;
