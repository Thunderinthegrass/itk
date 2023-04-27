import cl from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {
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
        <Post massage='Первый пост' likesCount="8" />
        <Post massage="Второй пост" likesCount="12"/>
        <Post massage="Третий пост" likesCount="5"/>
      </div>
    </div>
  )
}

export default MyPosts;