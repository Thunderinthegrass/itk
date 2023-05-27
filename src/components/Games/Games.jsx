import cl from './Games.module.scss';
import React from 'react';
import GamesItem from './GamesItem/GamesItem';

let Games = (props) => {
  let gamesItem = props.gamesPage.games.map(game => <GamesItem name={game.gamesName} />)

  let newGameElement = React.createRef();

  let addGame = () => {
    props.addGame();
    props.updateGameText('');
    console.log(props.gamesPage.newGamesText)
  }

  let onGameChange = () => {
    let text = newGameElement.current.value;
    props.updateGameText(text);
  }

  return (
    <div className={cl.games}>
      {gamesItem}
      <textarea
        onChange={onGameChange}
        ref={newGameElement}
        value={props.gamesPage.newGamesText}
      />
      <button onClick={addGame}>Жмяк</button>
    </div>
  )
}

export default Games;