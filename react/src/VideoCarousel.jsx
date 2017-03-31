import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDirection: 'previous',
      selectedIndex: this.props.defaultSelectedIndex || 0,
    }
    this.renderCurrentImage = this.renderCurrentImage.bind(this);
    this.renderArrow = this.renderArrow.bind(this);
    this.renderThumbs = this.renderThumbs.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
    this.getProps = this.getProps.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.progressSlideshow = this.progressSlideshow.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.goInDirection = this.goInDirection.bind(this);
  }

  componentDidMount() {
    if (this.props.slideshowActive) {
      this.progressSlideshow();
    }
  }

  renderCurrentImage() {
    console.log('inside of load', this.props.videos[0].id.videoId)
    let selected = this.state.selectedIndex;
    let currentImageProps = {
      key: selected,
      src: `https://www.youtube.com/embed/${this.props.videos[selected].id.videoId}`,
    };

    return (
      <iframe {...currentImageProps} />
    );
  }

  renderArrow(direction) {
    let arrowProps = {
      className:'carousel--arrow-' + direction,
      onClick: this.goInDirection.bind(null, direction),
    }

    return (
      <div {...arrowProps} />
    );
  }

  renderThumbs() {
    let thumbnails = null;
    if (this.props.showThumbnails) {
      thumbnails = (
        <div className="carousel--thumbs">
          {this.props.videos.map(this.renderThumb)}
        </div>
      );
    }
    return thumbnails;
  }

  renderThumb(src, index) {
    console.log('this is trying to render the thumbnails', src)
    let selected = (index === this.state.selectedIndex) ? 'carousel--selected' : '';
    let properties = {
      className: 'carousel--thumb' + selected, 
      key: index,
      onClick: this.handleThumbClick.bind(null, index),
      src: src.snippet.thumbnails.default.url,
    }

    return <img {...properties} />;
  }

  getProps() {
    console.log("get items")
    let properties = {
      className: 'carousel',
      onKeyDown: this.handleKeyDown,
      tabIndex: '0'
    };

    properties.onMouseEnter = this.handleMouseEnter;
    properties.onMouseLeave = this.handleMouseLeave;

    return properties;
  }

  handleKeyDown(event) {
    let left = 37;
    let up = 38;
    let right = 39;
    let down = 40;
    let key = event.which;

    if (key === down || key === left) {
      this.goInDirection('previous');
    } else if (key === up || key === right) {
      this.goInDirection('next');
    }
  }

  handleMouseEnter() {
    clearTimeout(this.timeout);
  }

  handleMouseLeave() {
    this.progressSlideshow();
  }

  handleThumbClick(index) {
    console.log("clicked")
    this.goToIndex(index);
  }

  progressSlideshow() {
    this.setState({animationDirection: 'next'});
    this.timeout = setTimeout(function() {
      this.goInDirection('next');
      this.progressSlideshow();
    }.bind(this), this.props.slideshowDelay);
  }

  goToIndex(index) {
    let direction = (this.state.selectedIndex > index) ? 'previous' : 'next';

    this.setState({
      animationDirection: direction,
      selectedIndex: index,
    })
  }

  goInDirection(direction) {
    console.log('trying to go in the direction', direction)
    let modifier = (direction === 'next') ? 1 : -1;
    let newIndex = this.state.selectedIndex + modifier;

    if (newIndex === this.props.videos.length) {
      newIndex = 0;
    } else if (newIndex === -1) {
      newIndex = this.props.videos.length - 1;
    }

    this.setState({
      animationDirection: direction,
      selectedIndex: newIndex,
    });
  }

  render() {
    let Animation = ReactCSSTransitionGroup;
    return (
      <div {...this.getProps()}>
        <div className="carousel--image">
          {this.renderArrow('previous')}
          <Animation transitionName={'animation--' + this.state.animationDirection}
            transitionName="example"
            transitionEnterTimeout={this.props.slideshowDelay}
            transitionLeaveTimeout={this.props.slideshowDelay}>
            {this.renderCurrentImage()}
          </ Animation>
          {this.renderArrow('next')}
        </div>
        {this.renderThumbs()}
      </div>
    );
  }
}

export default VideoCarousel;
