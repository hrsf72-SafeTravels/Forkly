import React, { PropTypes } from 'react';

class RecipeSaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClicked: false,
    };
  }

  changeClickedState() {
    this.setState({
      hasClicked: true,
    });
  }

  render() {
    return (
    <div>
      <span onClick={() => {
          this.props.saveRecipeClick();
          this.changeClickedState();
        }}
      >
        {this.state.hasClicked ?
          <i className="clicked fa fa-heart"></i>
          :
          <i className="not-clicked fa fa-heart"></i>
        }
      </span>
    </div>
    );
  }
};

RecipeSaveButton.propTypes = {
  saveRecipeClick: PropTypes.func.isRequired,
};
export default RecipeSaveButton;
