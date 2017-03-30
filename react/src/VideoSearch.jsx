import React from 'react';

const VideoSearch = (props) => {
  return (
    <div className="video">
      <h3>{props.video.snippet.title}</h3>
      <p>{props.video.snippet.description}</p>
      <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen />
    </div>
  );
};

export default VideoSearch;