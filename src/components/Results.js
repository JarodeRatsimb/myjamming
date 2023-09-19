import TrackList from "./TrackList";
import styles from "../styles/Results.module.css";

function Results({ tracks, addToPlaylist }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>Results</h1>
      <TrackList tracks={tracks} button="+" addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default Results;
