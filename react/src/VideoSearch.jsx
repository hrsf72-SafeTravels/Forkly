import React from 'react';

const VideoSearch = (props) => {
  return (
    <div className="video">
      <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen />
      <h3>{props.video.snippet.title}</h3>
      <span>{props.video.snippet.description}</span>
    </div>
  );
};

export default VideoSearch;