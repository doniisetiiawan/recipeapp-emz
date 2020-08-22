import PropTypes from 'prop-types';
import React from 'react';

const Ingredient = ({ amount, measurement, name }) => (
  <li>
    {amount} {measurement} {name}
  </li>
);

Ingredient.displayName = 'Ingredient';

export default Ingredient;

Ingredient.propTypes = {
  amount: PropTypes.number.isRequired,
  measurement: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
