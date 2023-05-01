import cl from './News.module.scss';
import NewsItem from './NewsItem/NewsItem';

const News = (props) => {
  let allTheNews = props.state.allNews.map(news => <NewsItem newsTitle={news.newsTitle} />)
  return (
    <div className={cl.news}>
      {allTheNews}
    </div>
  )
}

export default News;