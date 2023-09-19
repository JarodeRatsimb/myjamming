import Track from "./Track";
import styles from "../styles/TrackList.module.css";

function TrackList({ tracks, button, addToPlaylist, deleteFromPlaylist }) {
  const handleClick = (track) => {
    if (button === "+") addToPlaylist(track);
    if (button === "-") deleteFromPlaylist(track.id);
  };

  return (
    <div className={styles.outsideDiv}>
      {tracks ? (
        <ul className={styles.ulTracks}>
          {tracks.map((track) => (
            <li className={styles.listContainer} key={track.id}>
              <Track track={track} />
              <button
                type="button"
                className={styles.button}
                onClick={() => handleClick(track)}
              >
                {button}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nada Yet</p>
      )}
    </div>
  );
}

export default TrackList;
