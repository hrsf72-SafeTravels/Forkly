import React from 'react';
import IngredientsOfRecipe from './IngredientsOfRecipe';
import RecipeFromSearchHeader from './RecipeFromSearchHeader';
import NutritionOfRecipe from './NutritionOfRecipe';

const RecipeFromSearch = (props) => {
  console.log('recipes from search', props)
  return (
    <div className="container" onClick={() => {props.handleClick();}}>
      <RecipeFromSearchHeader photo={props.recipe.image} name={props.recipe.label}/>
      <div className="row-from-search row">
        <div className="col-lg-3" />
        <IngredientsOfRecipe ingredients={props.recipe.ingredients} />
        <NutritionOfRecipe nutritionalFacts={props.recipe.nutritionalFacts} />
      </div>
    </div>
  );
};

export default RecipeFromSearch;