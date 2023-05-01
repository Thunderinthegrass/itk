import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";

// let posts = [
//   {id: 1, post: "Первый пост", likes: 30},
//   {id: 2, post: "Второй пост", likes: 32},
//   {id: 3, post: "Третий пост", likes: 45},
//   {id: 1, post: "Четвертый пост", likes: 31},
//   {id: 2, post: "Пятый пост", likes: 12},
//   {id: 3, post: "Шестой пост", likes: 67},
//   {id: 1, post: "Седьмой пост", likes: 300},
//   {id: 2, post: "Восьмой пост", likes: 312},
//   {id: 3, post: "Девятый пост", likes: 6},
//   {id: 3, post: "Десятый пост", likes: 8},
// ];

let dialogs = [
  {id: 1, name: "Владимир Петров"},
  {id: 2, name: "Федор Пнев"},
  {id: 3, name: "Охотник Селиван"},
  {id: 4, name: "Дед Вовка"},
]

let messages = [
  {id: 1, message: "Картошка"},
  {id: 2, message: "Лук"},
  {id: 3, message: "Петрушка"},
  {id: 4, message: "Сало"},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);
reportWebVitals();
