function Track({ track }) {
  const { title, artist, album } = track;
  return (
    <>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
    </>
  );
}

export default Track;
