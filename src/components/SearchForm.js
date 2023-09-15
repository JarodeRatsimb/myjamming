import { useState } from "react";
import axios from "axios";

function SearchForm({ searchValue, myToken }) {
  const [valInForm, setValInForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${valInForm}&type=track`,
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => setValInForm(e.target.value)}
        value={valInForm}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
