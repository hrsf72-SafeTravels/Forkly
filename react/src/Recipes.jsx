import React from 'react';
import RecipeSearch from './recipeSearch.jsx';
import VideoSearch from './VideoSearch.jsx';
import RecipeFromSearch from './RecipeFromSearch.jsx';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndividualRecipe: false,
      individualRecipe: null,
    };
    this.showIndividualRecipe = this.showIndividualRecipe.bind(this);
  }

  showIndividualRecipe(recipe) {
    this.setState({
      showIndividualRecipe: !this.state.showIndividualRecipe,
      individualRecipe: recipe || null, 
    });
  }

  render() {
    return (
      <div>
        {!this.state.showIndividualRecipe &&
          <div className="container">
            <div className="row" className="video-list-container">
                {this.props.videos.length > 0 &&
                  <h2>Recommended Videos</h2>
                }
              <ul className="video-list">
                {this.props.videos.map((element, index) => <VideoSearch video={element} id={index} key={index} />)}
              </ul>
            </div>
            <div className="results row">
              <ul>
                {this.props.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} id={index} key={index} 
                  showIndividualRecipe={this.showIndividualRecipe}/>)
                }
              </ul>
            </div>
          </div>    
        }
        {this.state.showIndividualRecipe &&
          <RecipeFromSearch recipe={this.state.individualRecipe} showIndividualRecipe={this.showIndividualRecipe}/>
        }
      </div>
    );
  }
}

export default Recipes;
