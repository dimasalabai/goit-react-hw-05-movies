import { NavLink } from 'react-router-dom';

import style from './main-menu.module.css';

const MainManu = () => {
  return (
    <ul className={style.menu}>
      <li>
        <NavLink className={style.link} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className={style.link} to="/posts-search">
          Posts Search
        </NavLink>
      </li>
      <li>
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};
export default MainManu;
