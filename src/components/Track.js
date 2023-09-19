import styles from "../styles/Track.module.css";

function Track({ track }) {
  const { name, artists, album } = track;
  return (
    <div>
      <p className={styles.title}>{name}</p>
      <p className={styles.metadata}>
        {artists.map((artist) => artist.name).join(", ")} | {album.name}
      </p>
    </div>
  );
}

export default Track;
