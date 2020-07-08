/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';

const Instructions = ({ title, steps }) => (
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((s, i) => (
      <p key={i}>{s}</p>
    ))}
  </section>
);
Instructions.displayName = 'Instructions';

export default Instructions;

Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
