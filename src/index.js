import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addBookmark, updateBookmarkText, addGame, updateGameText, addVideo, updateVideosText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        state={state} 
        addPost={store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)} 
        addMessage={store.addMessage.bind(store)} 
        updateMessageText={store.updateMessageText.bind(store)}
        addBookmark={addBookmark}
        updateBookmarkText={updateBookmarkText}
        addGame={addGame}
        updateGameText={updateGameText}
        updateVideosText={updateVideosText}
        addVideo={addVideo} />
    </React.StrictMode>
  );
  reportWebVitals();
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);