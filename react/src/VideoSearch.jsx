import React from 'react';

class VideoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter() {
    this.setState({
      showDescription: true,
    });
  }

  handleExit() {
    this.setState({
      showDescription: false,
    })
  }

  render() {
    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleExit}>
          <iframe src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} className="video-frame"  allowFullScreen />
      </li>
    );
  }
}

export default VideoSearch;