import React from "react";
import cl from "./NewsContent.module.scss";

let NewsContent = (props) => {
  return (
    <div className={cl.newsContent}>
      {props.newsContent}
    </div>
  )
}

export default NewsContent;