import cl from "./FriendsItem.module.scss";

let FriendsItem = (props) => {
  return (
    <p className={cl.friendName}>
      <span>{props.friendName}</span> <span>{props.friendSurname}</span>
    </p>
  )
}

export default FriendsItem;