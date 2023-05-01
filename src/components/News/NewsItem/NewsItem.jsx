import cl from "./NewsItem.module.scss";

let NewsItem = (props)=> {
  return (
    <p className={cl.news}>
      {props.newsTitle}
    </p>
  )
}

export default NewsItem;

