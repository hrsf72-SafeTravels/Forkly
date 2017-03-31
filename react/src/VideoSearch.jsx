import React from 'react';
import VideoDescription from './videoDescription'

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
          <iframe src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} height="250px" width="400px"  allowFullScreen />
          {this.state.showDescription &&
            <div className="video-description">
              <h3>{this.prop.video.snippet.title}</h3>
              <p>{this.prop.video.snippet.description}</p>
            </div>
          }
      </li>
    );
  }
}

export default VideoSearch;