import { useState } from "react";

function SearchForm({ searchValue }) {
  const [valInForm, setValInForm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue(valInForm);
  };
  return (
<<<<<<< HEAD
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => setValInForm(e.target.value)} />
=======
    <form>
      <input type="text" />
>>>>>>> parent of 800e930 (ready to work with the API)
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
