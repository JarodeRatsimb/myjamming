import Track from "./Track";

function TrackList({ tracks, button, addToPlaylist, deleteFromPlaylist }) {
  const handleClick = (track) => {
    if (button === "+") addToPlaylist(track);
    if (button === "-") deleteFromPlaylist(track.title);
  };
  return (
    <ul>
      {tracks.map((track) => (
        <li key={tracks.title}>
          <Track track={track} />
          <button onClick={() => handleClick(track)}>{button}</button>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
