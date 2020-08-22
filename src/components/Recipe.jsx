import PropTypes from 'prop-types';
import React from 'react';
import IngredientsLis from './IngredientsList';
import Instructions from './Instructions';
import IngredientsList from './IngredientsList';

const Recipe = ({
  name = 'untitled',
  ingredients = [],
  steps = [],
}) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions
      title="Cooking Instructions"
      steps={steps}
    />
  </section>
);
Recipe.displayName = 'Recipe';

export default Recipe;

Recipe.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
  name: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};
