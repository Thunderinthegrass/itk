import cl from "./VideosItem.module.scss";
import React from "react";

let VideosItem = (props) => {
  return (
    <div className={cl.videos}>
      {props.videosName}
    </div>
  )
}

export default VideosItem;