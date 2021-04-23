import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ white, color, bg }) => (
  <div className="header my-5">
    <h1 className="header__h1">
      {white}
      {' '}
      <span className="header__color">{color}</span>
      <span className="header__back">{bg}</span>
    </h1>
  </div>
);

Heading.propTypes = {
  white: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,

};
Heading.defaultProps = {
  white: '',
  color: '',
  bg: '',
};
export default Heading;
