import { renderEntireTree } from "../render";

let state = {
  navbar: {
    navbarItems: [
      { id: 1, name: "Profile", path: "profile/" },
      { id: 2, name: "Dialogs", path: "dialogs/" },
      { id: 3, name: "News", path: "news/" },
      { id: 4, name: "Music", path: "music/" },
      { id: 5, name: "Settings", path: "settings/" },
      { id: 6, name: "Practice", path: "practice/" },
      { id: 7, name: "Friends", path: "friends/" },
      { id: 7, name: "Grups", path: "grups/" },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, post: "Первый пост", likes: 30 },
      { id: 2, post: "Второй пост", likes: 32 },
      { id: 3, post: "Третий пост", likes: 45 },
      { id: 4, post: "Четвертый пост", likes: 31 },
      { id: 5, post: "Пятый пост", likes: 12 },
      { id: 6, post: "Шестой пост", likes: 67 },
      { id: 7, post: "Седьмой пост", likes: 300 },
      { id: 8, post: "Восьмой пост", likes: 312 },
      { id: 9, post: "Девятый пост", likes: 6 },
      { id: 10, post: "Десятый пост", likes: 8 },
    ],
    newPostText: ''
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
    newMessageText: ''
  },
  newsPage: {
    allNews: [
      { id: 1, newsTitle: "Первая новость", likes: 3 },
      { id: 2, newsTitle: "Вторая новость", likes: 2 },
      { id: 3, newsTitle: "Третья новость", likes: 5 },
    ],
    newsContent: [
      { id: 1, newsContent: "Содержимое первой новости", likes: 3 },
      { id: 2, newsContent: "Содержимое второй новости", likes: 2 },
      { id: 3, newsContent: "Содержимое третьей новости", likes: 5 },
    ],
  },
  settingsPage: {
    settingsItems: [
      { id: 1, settingsItem: "Первая настройка" },
      { id: 2, settingsItem: "Вторая настройка" },
      { id: 3, settingsItem: "Третья настройка" },
    ],
  },
  practicePage: {
    practiceItems: [
      { id: 1, practiceName: "Первая практика" },
      { id: 2, practiceName: "Вторая практика" },
      { id: 3, practiceName: "Третья практика" },
    ],
  },
  friendsPage: {
    friends: [
      { id: 1, friendsName: "Владимир", friendsSurname: "Петров" },
      { id: 2, friendsName: "Федор", friendsSurname: "Пнев" },
      { id: 3, friendsName: "Охотник", friendsSurname: "Селиван" },
      { id: 4, friendsName: "Дед", friendsSurname: "Вовка" },
    ],
  },
  musicPage: {
    playlists: [
      { id: 1, playlistName: "Первый плейлист", songsQuantity: 35 },
      { id: 2, playlistName: "Второй плейлист", songsQuantity: 70 },
      { id: 3, playlistName: "Третий плейлист", songsQuantity: 14 },
      { id: 4, playlistName: "Четвертый плейлист", songsQuantity: 300 },
      { id: 4, playlistName: "Пятый плейлист", songsQuantity: 112 },
    ]
  },
  grupsPage: {
    grups: [
      { id: 1, grupsName: "Первая группа", grupsQuantity: 35 },
      { id: 2, grupsName: "Вторая группа", grupsQuantity: 70 },
      { id: 3, grupsName: "Третая группа", grupsQuantity: 14 },
      { id: 4, grupsName: "Четвертая группа", grupsQuantity: 300 },
      { id: 4, grupsName: "Пятая группа", grupsQuantity: 112 },
    ]
  }
};

export let addPost = () => {
  let newPost = {
    id: 11,
    post: state.profilePage.newPostText,
    likes: 15
  }
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};


export let addMessage = () => {
  let newMessage = {
    id: 1,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  renderEntireTree(state);
}

export let updateMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  renderEntireTree(state);
}


export default state;
