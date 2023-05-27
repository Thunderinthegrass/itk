import cl from "./Videos.module.scss";
import React from "react";
import VideosItem from "./VideosItem/VideosItem";

let Videos = (props) => {

  let videosItem = props.videosPage.videos.map(video => <VideosItem videosName={video.videosName} />);

  let newVideosElement = React.createRef();

  let addVideo = () => {
    props.addVideo();
    props.updateVideosText('');
    console.log(props.newVideoText)
  }

  let newVideoText = () => {
    let text = newVideosElement.current.value;
    props.updateVideosText(text);
  } 

  return (
    <div className={cl.videos}>
      {videosItem}

      <textarea
        onChange={newVideoText}
        ref={newVideosElement}
        value={props.videosPage.newVideoText} />
      <button onClick={addVideo}>Жмяк</button>
    </div>
  )
}

export default Videos;