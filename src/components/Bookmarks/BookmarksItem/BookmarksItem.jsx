import React from "react";
import cl from "./BookmarksItem.module.scss";

let BookmarksItem = (props) => {
  return (
    <div className={cl.item}>
      {props.name}
    </div>
  )
}

export default BookmarksItem;