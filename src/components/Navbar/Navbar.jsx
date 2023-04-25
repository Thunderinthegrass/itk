import cl from './Navbar.module.scss';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        <li className="navItem post">
          <Link to="/profile" className={`${cl.navLink} ${cl.active}`}>
            Profile
          </Link>
        </li>
        <li className={cl.navItem}>
          <Link to="/Dialogs" className={cl.navLink}>
            Messages
          </Link>
        </li>
        <li className={cl.navItem}>
          <Link to="/News" className={cl.navLink}>
            News
          </Link>
        </li>
        <li className={cl.navItem}>
          <Link to="/Music" className={cl.navLink}>
            Music
          </Link>
        </li>
        <li className={cl.navItem}>
          <Link to="/Settings" className={cl.navLink}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
