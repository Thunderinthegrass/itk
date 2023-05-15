import cl from "./Grups.module.scss";
import GrupsItem from "./GrupsItem/GrupsItem";
import React from "react";

let Grups = (props) => {
  let grupsItem = props.state.grups.map(grupsItem => <GrupsItem grupsName={grupsItem.grupsName}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        {grupsItem}
      </ul>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addPost}>Жми</button>
    </div>
  )
}

export default Grups;