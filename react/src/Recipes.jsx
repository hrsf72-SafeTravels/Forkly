import React from 'react';
import RecipeSearch from './recipeSearch.jsx';

const Recipes = (props) => {
  return (
    <div className="results">
      <ul>
        {props.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} key={index}/>)}
      </ul>
    </div>
  );
};

export default Recipes;