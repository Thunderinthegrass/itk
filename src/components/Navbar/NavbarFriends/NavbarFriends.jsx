import cl from "./NavbarFriends.module.scss";
import NavbarFriend from "./NavbarFriend/NavbarFriend";

let NavbarFriends = (props) => {
  let friendItem = props.friends.friends.map(friend => <NavbarFriend friendName={friend.friendsName} friendSurname={friend.friendsSurname} />)
  return (
    <div className={cl.friendsWrapper}>
      {friendItem}
    </div>
  )
}

export default NavbarFriends;