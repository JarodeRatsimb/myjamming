import TrackList from "./TrackList";

function Results({ tracks, addToPlaylist }) {
  return (
    <div>
      <TrackList tracks={tracks} button="+" addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default Results;
