import React, { PropTypes } from 'react';

const propTypes = {
  nutritionalFacts: PropTypes.object.isRequired,
};

const NutritionOfRecipe = (props) => {
  return (
    <div className="col-lg-6">
      <ul>
        {Object.keys(props.nutritionalFacts).map((fact) =>
          <ol>{fact}:{props.nutritionalFacts[fact]}</ol>
        )}
      </ul>
    </div>
  );
};

NutritionOfRecipe.propTypes = propTypes;
export default NutritionOfRecipe;

