import React, { PropTypes } from 'react';

const propTypes = {
  healthLabels: PropTypes.array.isRequired,
};

const NutritionOfRecipe = (props) => {
  return (
    <div className="col-lg-3">
      <a href={props.url}></a>
      <h3>Health Labels: </h3>
      <ul>
        {props.healthLabels.map((fact) =>
          <ol>{fact}</ol>
        )}
      </ul>
    </div>
  );
};

NutritionOfRecipe.propTypes = propTypes;
export default NutritionOfRecipe;

