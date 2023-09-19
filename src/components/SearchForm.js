import axios from "axios";
import styles from "../styles/SearchForm.module.css";

function SearchForm({ searchValue, myToken, handleChange, valInForm }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${valInForm}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      searchValue(response.data.tracks.items);
    } catch (error) {
      console.error("Error searching Spotify:", error);
    }
  };
  return (
    <form className={styles.searchForm} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.searchBox}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={valInForm}
        placeholder="Search songs to add to Playlist"
      />
      <button className={styles.searchButton}>Search</button>
    </form>
  );
}

export default SearchForm;
