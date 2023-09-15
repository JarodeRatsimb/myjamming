function Track({ track }) {
  const { name, artists, album } = track;
  return (
    <>
      <p>{name}</p>
      <p>{artists.map((artist) => artist.name).join(", ")}</p>
      <p>{album.name}</p>
    </>
  );
}

export default Track;
