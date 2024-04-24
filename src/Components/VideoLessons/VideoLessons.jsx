import './VideoLessons.css'
import YouTube from 'react-youtube';

function VideoLessons({ videoId }) {
  const opts = {
    height: '200',
    width: '315',

    playerVars: {
      autoplay: 1,  // Spela automatiskt videon när Videon laddas
    },
  };

  return <div className="videolessons">
  <YouTube videoId={"_rE4QTYEwaI"} opts={opts} className="YouTube" />
  <YouTube videoId={"metAjn9QezE"} opts={opts} className="YouTube" />
  <YouTube videoId={"CJIYIrxyYkU"} opts={opts} className="YouTube" />
  <YouTube videoId={"f4RecEffuJE"} opts={opts} className="YouTube" />
</div>

}

export default VideoLessons;
