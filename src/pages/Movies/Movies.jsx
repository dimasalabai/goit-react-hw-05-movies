import { useState, useEffect } from 'react';

import { Link, useSearchParams, useLocation } from 'react-router-dom';

import styles from './movies.module.css';
import emptyPoster from '../../images/emptyPoster.png';
import { getSearchMovie } from 'api/movies';

import SearchMovies from './SearchMovies/SearchMovies';

import Loader from 'components/Loader/Loader';
import GoBack from 'components/GoBack/GoBack';

const Movies = () => {
  // const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams(); //1 відслідковує, коли адресний рядок змінюється
  const search = searchParams.get('search'); //2 беремо праметр search з адресного рядка і записуємо в змінну

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getSearchMovie(search);

        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      // 4 робимо пошук, коли не пустий адресний рядок з параметром search
      fetchMovies();
    }
  }, [search]);

  const handleSearch = ({ search }) => {
    // setSearch(search); // тут передає рядок пошуку в локальний стейт
    setSearchParams({ search }); //3 передає рядок пошуку форми в адресний рядок (повністю перезаписує рядок параметрів)
    setMovies([]);
  };

  const elements = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={styles.item}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : emptyPoster
        }
        alt=""
        className={styles.movieImg}
      />
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.link}
      >
        <p className={styles.title}>{title}</p>
      </Link>
    </li>
  ));

  return (
    <>
      <div className="container">
        <GoBack locationFrom={-1} />
        <SearchMovies onSubmit={handleSearch} />

        {error && <p className={styles.error}>{error}</p>}
        {loading && <Loader />}
        {!!elements.length && <ul className={styles.list}>{elements}</ul>}
      </div>
    </>
  );
};
export default Movies;
