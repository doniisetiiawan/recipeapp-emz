/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import Recipe from './Recipe';
import './Menu.css';

const Menu = ({ recipes = [] }) => (
  <article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
      {recipes.map((props, i) => (
        <Recipe key={i} {...props} />
      ))}
    </div>
  </article>
);

Menu.displayName = 'Menu';

export default Menu;

Menu.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
