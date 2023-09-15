import Track from "./Track";

function TrackList({ tracks, button, addToPlaylist, deleteFromPlaylist }) {
  const handleClick = (track) => {
    if (button === "+") addToPlaylist(track);
    if (button === "-") deleteFromPlaylist(track.id);
  };

  return (
    <>
      {tracks ? (
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              <Track track={track} />
              <button onClick={() => handleClick(track)}>{button}</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nada Yet</p>
      )}
    </>
  );
}

export default TrackList;
