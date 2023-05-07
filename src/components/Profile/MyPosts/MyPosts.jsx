import cl from './MyPosts.module.scss';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
  let postsElem = props.posts.map(post => <Post message={post.post} likesCount={post.likes}/>)

  let newPostElement = React.createRef();//привязка ссылки

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <div className={cl.myPosts}>
        <h3>{props.title}</h3>
        <div className={cl.addPost}>
          <textarea ref={newPostElement} className={cl.textarea}></textarea>
          <div className={cl.btnWrapper}>
            <button onClick={ addPost }>{props.addBtn}</button>
            <button>{props.removeBtn}</button>
          </div>
        </div>
      </div>
      <div className="posts">
        { postsElem }
      </div>
    </div>
  )
}

export default MyPosts;