import TrackList from "./TrackList";

function PlayList({ tracks, deleteFromPlaylist }) {
  return (
    <div>
      <TrackList
        tracks={tracks}
        button="-"
        deleteFromPlaylist={deleteFromPlaylist}
      />
      <button>Save to Spotify</button>
    </div>
  );
}

export default PlayList;
