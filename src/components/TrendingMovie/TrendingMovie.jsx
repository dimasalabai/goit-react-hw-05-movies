import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import styles from './trending-movie.module.css';

import { getAllMovies } from 'api/movies';

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getAllMovies();

        setMovies(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const elements = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={styles.item}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className={styles.movieImg}
      />
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        className={styles.link}
      >
        <p className={styles.title}>{title}</p>
      </Link>
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <Loader />}
      {!!elements.length && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};
export default TrendingMovie;
