import React from "react";
import styles from "../styles/SpotifyLogin.module.css";

function SpotifyLogin() {
  const clientId = "10b0c0df1a4646c4b5058fc052b903ab";
  const redirectUri = "https://jaroderatsimb.github.io/myjammming/";

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private`;
    window.location.href = authUrl;
  };

  return (
    <main className={styles.container}>
      <p className={styles.logo}>Jammming</p>
      <button className={styles.button} onClick={handleLogin}>
        Log in with Spotify
      </button>
      <p className={styles.caption}>
        A Spotify Playlist maker by Jarode Ratsimbazafy
      </p>
    </main>
  );
}

export default SpotifyLogin;
