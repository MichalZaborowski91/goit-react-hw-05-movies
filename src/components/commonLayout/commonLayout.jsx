import { NavLink, Outlet } from 'react-router-dom';
import css from './commonLayout.module.css';

const CommonLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default CommonLayout;
