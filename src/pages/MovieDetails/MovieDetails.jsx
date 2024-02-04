import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import styles from './movie-details.module.css';
import { getCurrentMovie } from 'api/movies';

import Loader from 'components/Loader/Loader';
import GoBack from 'components/GoBack/GoBack';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const from = location.state?.from || '/';

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getCurrentMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = movie;

  //   const elements = genres.map(item => {
  //     return item;
  //   });

  //   console.log(elements);

  return (
    <div className={styles.container}>
      {/* <Link to="/" className={styles.linkBack}>
        Go back
      </Link> */}
      <GoBack locationFrom={from} />
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}

      {!!movie === true && (
        <>
          <div className={styles.mainInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
              className={styles.movieImg}
            />
            <div className={styles.movieInfo}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.text}>
                User Score: {Math.floor(vote_average * 100) / 10}%
              </p>
              <h2 className={styles.subtitle}>Oveview</h2>
              <p className={styles.text}>{overview}</p>

              <h3>Genres</h3>
              <ul className={styles.genresList}>
                {!!genres &&
                  genres.map(({ name }, index) => {
                    return <li key={index}>{name} </li>;
                  })}
              </ul>
            </div>
          </div>
          <div className={styles.details}>
            <h4>Additional information</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink className={styles.link} state={{ from }} to={`cast`}>
                  Cast
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  className={styles.link}
                  state={{ from }}
                  to={`reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
