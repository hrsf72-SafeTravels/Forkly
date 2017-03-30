import React from 'react';
import RecipeSearch from './recipeSearch.jsx';
import VideoSearch from './VideoSearch.jsx';

const Recipes = (props) => {
  console.log('looking at the props', props)
  return (
    <div className="results">
      <ul>
        {props.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} key={index}/>)}
        {props.videos.length &&
          <h2>Recommended Videos</h2>
        }
        {props.videos.map((element, index) => <VideoSearch video={element} key={index} />)}
      </ul>
    </div>
  );
};

export default Recipes;