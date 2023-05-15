import React from "react";
import cl from "./PlaylistsItem.module.scss";

let PlaylistsItem = (props) => {
  return (
    <div className={cl.playlist}>
      Имя плейлиста: {props.playlistName}, количество песен в плейлисте: {props.songsQuantity}
    </div>
  )
}

export default PlaylistsItem;