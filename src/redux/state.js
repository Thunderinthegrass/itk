let store = {
  _state: {
    navbar: {
      navbarItems: [
        { id: 1, name: "Profile", path: "profile/" },
        { id: 2, name: "Dialogs", path: "dialogs/" },
        // { id: 3, name: "News", path: "news/" },
        // { id: 4, name: "Music", path: "music/" },
        // { id: 5, name: "Settings", path: "settings/" },
        // { id: 6, name: "Practice", path: "practice/" },
        // { id: 7, name: "Friends", path: "friends/" },
        // { id: 7, name: "Grups", path: "grups/" },
        // { id: 7, name: "Bookmarks", path: "bookmarks/" },
        // { id: 7, name: "Games", path: "games/" },
        // { id: 7, name: "Videos", path: "videos/" },
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
    // newsPage: {
    //   allNews: [
    //     { id: 1, newsTitle: "Первая новость", likes: 3 },
    //     { id: 2, newsTitle: "Вторая новость", likes: 2 },
    //     { id: 3, newsTitle: "Третья новость", likes: 5 },
    //   ],
    //   newsContent: [
    //     { id: 1, newsContent: "Содержимое первой новости", likes: 3 },
    //     { id: 2, newsContent: "Содержимое второй новости", likes: 2 },
    //     { id: 3, newsContent: "Содержимое третьей новости", likes: 5 },
    //   ],
    // },
    // settingsPage: {
    //   settingsItems: [
    //     { id: 1, settingsItem: "Первая настройка" },
    //     { id: 2, settingsItem: "Вторая настройка" },
    //     { id: 3, settingsItem: "Третья настройка" },
    //   ],
    // },
    // practicePage: {
    //   practiceItems: [
    //     { id: 1, practiceName: "Первая практика" },
    //     { id: 2, practiceName: "Вторая практика" },
    //     { id: 3, practiceName: "Третья практика" },
    //   ],
    // },
    // friendsPage: {
    //   friends: [
    //     { id: 1, friendsName: "Владимир", friendsSurname: "Петров" },
    //     { id: 2, friendsName: "Федор", friendsSurname: "Пнев" },
    //     { id: 3, friendsName: "Охотник", friendsSurname: "Селиван" },
    //     { id: 4, friendsName: "Дед", friendsSurname: "Вовка" },
    //   ],
    // },
    // musicPage: {
    //   playlists: [
    //     { id: 1, playlistName: "Первый плейлист", songsQuantity: 35 },
    //     { id: 2, playlistName: "Второй плейлист", songsQuantity: 70 },
    //     { id: 3, playlistName: "Третий плейлист", songsQuantity: 14 },
    //     { id: 4, playlistName: "Четвертый плейлист", songsQuantity: 300 },
    //     { id: 4, playlistName: "Пятый плейлист", songsQuantity: 112 },
    //   ]
    // },
    // grupsPage: {
    //   grups: [
    //     { id: 1, grupsName: "Первая группа", grupsQuantity: 35 },
    //     { id: 2, grupsName: "Вторая группа", grupsQuantity: 70 },
    //     { id: 3, grupsName: "Третая группа", grupsQuantity: 14 },
    //     { id: 4, grupsName: "Четвертая группа", grupsQuantity: 300 },
    //     { id: 4, grupsName: "Пятая группа", grupsQuantity: 112 },
    //   ]
    // },
    // bookmarksPage: {
    //   bookmarks: [
    //     { id: 1, bookmarkName: "Первая группа"},
    //     { id: 2, bookmarkName: "Вторая группа"},
    //     { id: 3, bookmarkName: "Третая группа"},
    //     { id: 4, bookmarkName: "Четвертая группа"},
    //     { id: 4, bookmarkName: "Пятая группа"},
    //   ],
    //   newBookmarkText: ''
    // },
    // gamesPage: {
    //   games: [
    //     { id: 1, gamesName: "Первая игра"},
    //     { id: 2, gamesName: "Вторая игра"},
    //     { id: 3, gamesName: "Третая игра"},
    //     { id: 4, gamesName: "Четвертая игра"},
    //     { id: 4, gamesName: "Пятая игра"},
    //   ],
    //   newGamesText: ''
    // }
    // ,
    // videosPage: {
    //   videos: [
    //     { id: 1, videosName: "Первое видео"},
    //     { id: 2, videosName: "Второе видео"},
    //     { id: 3, videosName: "Третье видео"},
    //     { id: 4, videosName: "Четвертое видео"},
    //     { id: 4, videosName: "Пятое видео"},
    //   ],
    //   newVideoText: ''
    // }
  },
  getState() {
    return this._state;
  },
  _renderEntireTree() {
    console.log('state is changed');
  },
  addPost() {
    let newPost = {
      id: 11,
      post: this._state.profilePage.newPostText,
      likes: 15
    }
    this._state.profilePage.posts.push(newPost);
    this._renderEntireTree(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._renderEntireTree(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 1,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._renderEntireTree(this._state);
  },
  updateMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._renderEntireTree(this._state);
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  }
}


export let addBookmark = () => {
  // let newBookmark = {
  //   id: 5,
  //   bookmarkName: state.bookmarksPage.newBookmarkText
  // }
  // state.bookmarksPage.bookmarks.push(newBookmark);
  // renderEntireTree(state);
}

export let updateBookmarkText = (newText) => {
  // state.bookmarksPage.newBookmarkText = newText;
  // renderEntireTree(state);
}


export let addGame = () => {
  // let newGame = {
  //   id: 3,
  //   gamesName: state.gamesPage.newGamesText
  // }
  // state.gamesPage.games.push(newGame);
  // renderEntireTree(state);
}

export let updateGameText = (newText) => {
  // state.gamesPage.newGamesText = newText;
  // renderEntireTree(state);
}


export let addVideo = () => {
  // let newVideo = {
  //   id: 1,
  //   videosName: state.videosPage.newVideoText
  // }
  // state.videosPage.videos.push(newVideo);
  // renderEntireTree(state);
}

export let updateVideosText = (newText) => {
  // state.videosPage.newVideoText = newText;
  // renderEntireTree(state);
}


export default store;
window.store = store;