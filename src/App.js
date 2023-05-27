import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
// import Practice from "./components/Practice/Practice";
// import Friends from "./components/Friends/Friends";
// import Grups from "./components/Grups/Grups";
// import Bookmarks from "./components/Bookmarks/Bookmarks";
// import Games from "./components/Games/Games";
// import Videos from "./components/Videos/Videos";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar navbar={props.state.navbar} friends={props.state.friendsPage} />
        <Routes>
          <Route
            path="profile/"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route
            path="dialogs/*"
            element={
              <Dialogs
                state={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateMessageText={props.updateMessageText}
              />
            }
          />
          {/* <Route path="news/" element={<News state={props.state.newsPage} />} />
          <Route
            path="music/"
            element={<Music state={props.state.musicPage} />}
          />
          <Route
            path="settings/"
            element={<Settings state={props.state.settingsPage} />}
          /> */}
          {/* <Route
            path="practice/"
            element={<Practice state={props.state.practicePage} />}
          />
          <Route
            path="/friends"
            element={<Friends state={props.state.friendsPage} />}
          />
          <Route
            path="/grups"
            element={<Grups state={props.state.grupsPage} />}
          />
          <Route
            path="/bookmarks"
            element={
              <Bookmarks
                bookmarksPage={props.state.bookmarksPage}
                addBookmark={props.addBookmark}
                updateBookmarkText={props.updateBookmarkText}
              />
            }
          />
          <Route
            path="/games"
            element={
              <Games
                gamesPage={props.state.gamesPage}
                updateGameText={props.updateGameText}
                addGame={props.addGame}
              />
            }
          />
          <Route
            path="/videos"
            element={
              <Videos 
                videosPage={props.state.videosPage}
                addVideo={props.addVideo}
                updateVideosText={props.updateVideosText}
              />
            }
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
