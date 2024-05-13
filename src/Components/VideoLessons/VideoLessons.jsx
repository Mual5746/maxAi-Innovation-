import './VideoLessons.css'
import YouTube from 'react-youtube';

function VideoLessons({ videoId }) {
  const opts = {
    height: 'auto',
    width: '100%',

  };

  return <div className="videolessons">
    <YouTube videoId={"_rE4QTYEwaI"} opts={opts} className="YouTube" />
    <YouTube videoId={"metAjn9QezE"} opts={opts} className="YouTube" />
    <YouTube videoId={"CJIYIrxyYkU"} opts={opts} className="YouTube" />
    <YouTube videoId={"f4RecEffuJE"} opts={opts} className="YouTube" />
  </div>

}

export default VideoLessons;
