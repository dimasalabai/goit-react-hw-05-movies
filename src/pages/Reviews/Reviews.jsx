import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './reviews.module.css';

import { getReviews } from 'api/movies';

import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getReviews(movieId);

        setReviews(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);
  // console.log(casts);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id} className={styles.item}>
        <div className={styles.reviewDetails}>
          <h4 className={styles.author}>
            <span>Author:</span> {author}
          </h4>
          <p className={styles.content}>{content}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {!!reviews.length ? (
        <ul className={styles.list}>{elements}</ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
