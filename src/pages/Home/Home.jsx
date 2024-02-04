import styles from './home.module.css';
import TrendingMovie from 'components/TrendingMovie/TrendingMovie';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Treading movie</h1>
      <TrendingMovie />
    </div>
  );
};
export default Home;
