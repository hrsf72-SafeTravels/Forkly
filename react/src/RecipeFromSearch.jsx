import React from 'react';
import IngredientsOfRecipe from './IngredientsOfRecipe';
import RecipeFromSearchHeader from './RecipeFromSearchHeader';
import NutritionOfRecipe from './NutritionOfRecipe';

const RecipeFromSearch = (props) => {
  console.log('recipes from search', props)
  return (
    <div className="recipe-container" onClick={props.showIndividualRecipe}>
      <RecipeFromSearchHeader photo={props.recipe.image} name={props.recipe.label} recipe={props.recipe}/>
      <div className="row-from-search row">
        <div className="col-lg-3" />
        <IngredientsOfRecipe ingredients={props.recipe.ingredients} />
        <NutritionOfRecipe healthLabels={props.recipe.healthLabels} url={props.recipe.url}/>
      </div>
    </div>
  );
};

export default RecipeFromSearch;