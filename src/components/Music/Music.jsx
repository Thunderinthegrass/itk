import cl from './Music.module.scss';
import PlaylistsItem from './Playlists/PlaylistsItem';

const Music = (props) => {
  let playlist = props.state.playlists.map(playlist => <PlaylistsItem playlistName={playlist.playlistName} songsQuantity={playlist.songsQuantity} />)

  return (
    <div className={cl.music}>
      Music
      <div className="playlists">
        {playlist}
      </div>
    </div>
  )
}

export default Music;