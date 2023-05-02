let state = {
  navbar: {
    navbarItems: [
      {id: 1, name: "Profile",path: "profile/"},
      {id: 2, name: "Dialogs",path: "dialogs/"},
      {id: 3, name: "News",path: "news/"},
      {id: 4, name: "Music",path: "music/"},
      {id: 5, name: "Settings",path: "settings/"},
    ]
  },
  profilePage: {
    posts: [
      { id: 1, post: "Первый пост", likes: 30 },
      { id: 2, post: "Второй пост", likes: 32 },
      { id: 3, post: "Третий пост", likes: 45 },
      { id: 1, post: "Четвертый пост", likes: 31 },
      { id: 2, post: "Пятый пост", likes: 12 },
      { id: 3, post: "Шестой пост", likes: 67 },
      { id: 1, post: "Седьмой пост", likes: 300 },
      { id: 2, post: "Восьмой пост", likes: 312 },
      { id: 3, post: "Девятый пост", likes: 6 },
      { id: 3, post: "Десятый пост", likes: 8 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Владимир Петров" },
      { id: 2, name: "Федор Пнев" },
      { id: 3, name: "Охотник Селиван" },
      { id: 4, name: "Дед Вовка" },
    ],

    messages: [
      { id: 1, message: "Картошка" },
      { id: 2, message: "Лук" },
      { id: 3, message: "Петрушка" },
      { id: 4, message: "Сало" },
    ],
  },
  newsPage: {
    allNews: [
    { id: 1, newsTitle: "Первая новость", likes: 3 },
    { id: 2, newsTitle: "Вторая новость", likes: 2 },
    { id: 3, newsTitle: "Третья новость", likes: 5 },
    ]
  },
};

export default state;
