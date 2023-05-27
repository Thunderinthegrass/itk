import React from "react";
import cl from "./Bookmarks.module.scss";
import BookmarksItem from "./BookmarksItem/BookmarksItem";

let Bookmarks = (props) => {
  
  let bookmarksItem = props.bookmarksPage.bookmarks.map(elem => <BookmarksItem name={elem.bookmarkName} />)

  let newBookmarkElement = React.createRef();

  let addBookmark = () => {
    props.addBookmark();
    console.log(props.bookmarksPage.newBookmarkText);
    props.updateBookmarkText('');
  }

  let onBookmarkChange = () => {
    let text = newBookmarkElement.current.value;
    props.updateBookmarkText(text);
  }


  return (
    <div className={cl.bookmarks}>
      <div className="bookmarksWrapper">
        {bookmarksItem}
      </div>
      <textarea 
      ref={newBookmarkElement}
      onChange={onBookmarkChange}
      value={props.bookmarksPage.newBookmarkText}
       />
      <button onClick={addBookmark}>Жмяк</button>
    </div>
  )
}

export default Bookmarks;