import React from "react";

function SpotifyLogin() {
  const clientId = "10b0c0df1a4646c4b5058fc052b903ab";
  const redirectUri = "http://localhost:3000";

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
}

export default SpotifyLogin;
