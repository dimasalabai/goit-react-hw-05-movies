import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import styles from './cast.module.css';
import emptyCast from '../../images/emptyPoster.png';
import { getCats } from 'api/movies';

import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const {
          data: { cast },
        } = await getCats(movieId);

        setCasts(cast?.length ? cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);
  // console.log(casts);

  const elements = casts.map(({ id, profile_path, name, character }) => {
    return (
      <li key={id} className={styles.item}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : emptyCast
          }
          alt=""
          className={styles.castImg}
        />
        <div className={styles.catsDetails}>
          <h4 className={styles.name}>
            <span>Cast's name:</span> {name}
          </h4>
          <p className={styles.character}>
            <span>Character:</span> {character}
          </p>
        </div>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {!!casts && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};
export default Cast;
