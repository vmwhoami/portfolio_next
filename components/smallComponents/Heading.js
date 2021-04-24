import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
const Heading = ({ white, color, bg }) => (
  <div className="header my-5">
    <motion.div initial="hidden" animate="visible"
      variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .2
          }
        }
      }
      }
    >
      <h1 className="header__h1">
        {white}
        {' '}
        <span className="header__color">{color}</span>
        <span className="header__back">{bg}</span>
      </h1>
    </motion.div>
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
