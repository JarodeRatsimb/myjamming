import TrackList from "./TrackList";
import styles from "../styles/Results.module.css";

function Results({ tracks, addToPlaylist, handleClearSearch }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>Results</h1>
      <TrackList tracks={tracks} button="+" addToPlaylist={addToPlaylist} />
      <button
        className={styles.clearSearch}
        type="button"
        onClick={handleClearSearch}
      >
        Clear
      </button>
    </div>
  );
}

export default Results;
