import cl from './News.module.scss';
import NewsItem from './NewsItem/NewsItem';
import React from 'react';
import NewsContent from './NewsContent/NewsContent';

const News = (props) => {
  let allTheNews = props.state.allNews.map(news => <NewsItem newsTitle={news.newsTitle} />)
  
  let newsContent = props.state.newsContent.map(newsContent => <NewsContent newsContent={newsContent.newsContent} />)

  let newPostItem = React.createRef();

  let addPost = () => {
    let text = newPostItem.current.value;
    alert(text);
  }
  
  return (
    <div className={cl.news}>
      {allTheNews}
      <div className="newsContent">
        {newsContent}
      </div>
      <div className="messages">
        <textarea ref={newPostItem}></textarea>
        <button onClick={addPost}>Отправить</button>
      </div>
    </div>
  )
}

export default News;