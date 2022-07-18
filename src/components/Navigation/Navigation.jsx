import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.navigationItem : styles.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.navigationItem : styles.active)}
      >
        Movies
      </NavLink>
      <hr />
      <Outlet />
    </nav>
  );
}
