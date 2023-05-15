import cl from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={cl.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        addBtn="Добавить пост"
        removeBtn="Удалить пост"
        title="Мои посты"
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
