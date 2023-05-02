import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar state={props.state.navbar}/>
        <Routes>
          <Route path ="profile/" element={<Profile state={props.state.profilePage}/>} />
          <Route path ="dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path ="news/" element={<News state={props.state.newsPage} />} />
          <Route path ="music/" element={<Music />} />
          <Route path ="settings/" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
