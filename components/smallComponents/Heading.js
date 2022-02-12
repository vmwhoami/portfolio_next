import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Heading = ({ white, color, bg }) => {
  const ease = [0.34, 1.56, 0.64, 1];
  const variant = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      ease,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <div className="header my-5">
      <motion.div initial="hidden" animate="visible" variants={variant}>
        <h1 className="header__h1">
          {white}
          {' '}
          <motion.span className="header__color">{color}</motion.span>
          <motion.span className="header__back">{bg}</motion.span>
        </h1>
      </motion.div>
    </div>
  );
};

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
