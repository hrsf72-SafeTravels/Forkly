import React, { PropTypes } from 'react';
import $ from 'jquery';

class RecipeSaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClicked: false,
    };
  }

  changeClickedState() {
    this.setState({
      hasClicked: !this.state.hasClicked,
    });
  }

  deleteRecipeForUser(recipe) {
    console.log('hi from delete recipe');
    $.ajax({
      url: '/api/deleteRecipe',
      type: 'DELETE',
      // contentType: 'application/json',
      // data: JSON.stringify({
      //   recipe,
      // }),
      data: {
        recipe,
      },
      success: () => {
        console.log('delete!');
      },
      error: () => {
        console.log('error in deleting!');
      },
    });
  }

  render() {
    return (
    <div>
      <span>
        {this.state.hasClicked ?
          <i
            className="clicked fa fa-heart"
            onClick={() => {
              this.deleteRecipeForUser(this.props.recipe);
              this.changeClickedState();
            }}
          >
          </i>
          :
          <i
            className="not-clicked fa fa-heart"
            onClick={() => {
              this.props.saveRecipeClick();
              this.changeClickedState();
            }}
          >
          </i>
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
