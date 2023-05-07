import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Practice from './components/Practice/Practice';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar state={props.state.navbar} friends={props.state.friendsPage}/>
        <Routes>
          <Route path ="profile/" element={<Profile state={props.state.profilePage}/>} />
          <Route path ="dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path ="news/" element={<News state={props.state.newsPage} />} />
          <Route path ="music/" element={<Music />} />
          <Route path ="settings/" element={<Settings state={props.state.settingsPage} />} />
          <Route path="practice/"element={<Practice state={props.state.practicePage} />}/>
          <Route path="friends" element={<Friends state={props.state.friendsPage}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
