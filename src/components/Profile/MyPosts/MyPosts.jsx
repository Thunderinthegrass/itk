import cl from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postsElem = props.posts.map((post) => (
    <Post message={post.post} likesCount={post.likes} />
  ));

  let newPostElement = React.createRef(); //привязка ссылки

  let addPost = () => {
    props.addPost();
    console.log(props.newPostText)
    props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={cl.myPosts}>
        <h3>{props.title}</h3>
        <div className={cl.addPost}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={cl.textarea}
            value={props.newPostText}
          />
          <div className={cl.btnWrapper}>
            <button onClick={addPost}>{props.addBtn}</button>
            <button>{props.removeBtn}</button>
          </div>
        </div>
      </div>
      <div className="posts">{postsElem}</div>
    </div>
  );
};

export default MyPosts;
