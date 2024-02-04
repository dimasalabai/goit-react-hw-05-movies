import { useState } from 'react';

import styles from './search-movies.module.css';
const SearchMovies = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state }); // викликається handleSearch
    setState({
      search: '',
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.formButton}>
          <span className={styles.formButtonLabel}>Search</span>
        </button>

        <input
          value={state.search}
          name="search"
          onChange={handleChange}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
      </form>
    </div>
  );
};
export default SearchMovies;
