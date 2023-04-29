import cl from './MyPosts.module.scss';
import Post from './Post/Post';
import posts from '../../..';


const MyPosts = (props) => {
  // let posts = [
  //   {id: 1, post: "Первый пост", likes: 30},
  //   {id: 2, post: "Второй пост", likes: 32},
  //   {id: 3, post: "Третий пост", likes: 45},
  //   {id: 1, post: "Четвертый пост", likes: 31},
  //   {id: 2, post: "Пятый пост", likes: 12},
  //   {id: 3, post: "Шестой пост", likes: 67},
  //   {id: 1, post: "Седьмой пост", likes: 300},
  //   {id: 2, post: "Восьмой пост", likes: 312},
  //   {id: 3, post: "Девятый пост", likes: 6},
  //   {id: 3, post: "Десятый пост", likes: 8},
  // ]

  let postsElem = posts.map(post => <Post message={post.post} likesCount={post.likes}/>)

  return (
    <div>
      <div className={cl.myPosts}>
        <h3>{props.title}</h3>
        <div className="addPost">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>{props.addBtn}</button>
          <button>{props.removeBtn}</button>
        </div>
      </div>
      <div className="posts">
        { postsElem }
      </div>
    </div>
  )
}

export default MyPosts;