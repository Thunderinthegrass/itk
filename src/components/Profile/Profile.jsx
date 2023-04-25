import cl from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={cl.content}>
      <div className={cl.banner}></div>
      <div className="contentPerson"></div>
      <MyPosts addBtn="Добавить пост" removeBtn="Удалить пост" title="Мой профиль"/>
    </div>
  );
};

export default Profile;
