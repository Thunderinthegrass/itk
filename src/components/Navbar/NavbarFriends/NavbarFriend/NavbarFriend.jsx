import cl from "./NavbarFriend.module.scss";

let NavbarFriend = (props) => {
  return (
    <p className={cl.navbarFriend}>
      <span>{props.friendName}</span> <span>{props.friendSurname}</span>
    </p>
  )
}

export default NavbarFriend;