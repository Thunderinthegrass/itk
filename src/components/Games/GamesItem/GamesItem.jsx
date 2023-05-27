import cl from './GamesItem.module.scss';
import React from 'react';

let GamesItem = (props) => {
  return (
    <div className={cl.gamesItem}>
      {props.name}
    </div>
  )
}

export default GamesItem;