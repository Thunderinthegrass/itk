import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

let posts = [
  {id: 1, post: "Первый пост", likes: 30},
  {id: 2, post: "Второй пост", likes: 32},
  {id: 3, post: "Третий пост", likes: 45},
  {id: 1, post: "Четвертый пост", likes: 31},
  {id: 2, post: "Пятый пост", likes: 12},
  {id: 3, post: "Шестой пост", likes: 67},
  {id: 1, post: "Седьмой пост", likes: 300},
  {id: 2, post: "Восьмой пост", likes: 312},
  {id: 3, post: "Девятый пост", likes: 6},
  {id: 3, post: "Десятый пост", likes: 8},
];

export default posts;
