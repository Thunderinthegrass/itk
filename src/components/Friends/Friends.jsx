import cl from "./Friends.module.scss";
import FriendsItem from "./FriendsItem/FriendsItem";

let Friends = (props) => {
  let friendsItem = props.state.friends.map(friend => <FriendsItem friendName={friend.friendsName} friendSurname={friend.friendsSurname} />)
  return (
    <div className={cl.friends}>
      {friendsItem}
    </div>
  )
}

export default Friends;