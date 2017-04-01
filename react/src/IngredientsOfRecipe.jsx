import React, { PropTypes } from 'react';

const propTypes = {
  ingredients: PropTypes.array.isRequired,
};

const IngredientsOfRecipe = (props) => {
  console.log('ingredients', props.ingredients);
  return (
    <div className="col-lg-3">
      <ul className="ingredients-list">
        {props.ingredients.map((ingredient, index) =>
          <li key={index}>{ingredient.text}</li>
        )}
      </ul>
    </div>
  );
};

IngredientsOfRecipe.propTypes = propTypes;
export default IngredientsOfRecipe;
