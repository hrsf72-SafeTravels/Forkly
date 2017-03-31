import React from 'react';
import RecipeSearch from './recipeSearch.jsx';

const Recipes = (props) => {
  console.log('looking at the props', props)
  return (
    <div className="container">
      <div className="row" className="video-list-container">
          {props.videos.length > 0 &&
            <h2>Recommended Videos</h2>
          }
        <ul className="video-list">
          {props.videos.map((element, index) => <VideoSearch video={element} id={index} key={index} />)}
        </ul>
      </div>
      <div className="results row">
        <ul>
          {props.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} id={index} key={index}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
