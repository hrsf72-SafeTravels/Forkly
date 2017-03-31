import React from 'react';
import VideoDescription from './videoDescription'

const VideoSearch = (props) => {
  return (
      <li>
          <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} height="250px" width="400px"  allowFullScreen />
      </li>
  );
};

export default VideoSearch;
