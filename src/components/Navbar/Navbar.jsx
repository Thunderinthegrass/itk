import cl from './Navbar.module.scss';
import NavbarItem from './NavbarItem/NavbarItem';
import NavbarFriends from './NavbarFriends/NavbarFriends';


const Navbar = (props) => {
  let navbarItems = props.state.navbarItems.map(item => <NavbarItem name={item.name} path={item.path}/>);
  return (
    <div className={cl.navWrapper}>
      <nav className={cl.nav}>
      <ul className={cl.navList}>
        {navbarItems}
      </ul>
    </nav>
    <NavbarFriends friends={props.friends} />
    </div>
  );
};

export default Navbar;
