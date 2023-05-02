import cl from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElem = props.posts.map(post => <Post message={post.post} likesCount={post.likes}/>)

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