import React from 'react';

const TopRecipeEntry = (props) => {
  return (
    <div className="col-lg-3 top-recipe-entry">
      {console.log('recipe', props.recipe)}
      <h1 className="recipe-name">{props.recipe.name}</h1>
      <ul>
        {props.recipe.ingredients.map((ingredient) =>
          <li>{ingredient.ingredient}</li>
        )}
      </ul>
    </div>
  );
};

export default TopRecipeEntry;
