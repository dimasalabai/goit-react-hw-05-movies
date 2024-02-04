import { NavLink } from 'react-router-dom';

import styles from './movie-menu.module.css';

const MovieMenu = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.menu}>
          <li>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default MovieMenu;
