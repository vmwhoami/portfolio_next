import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from '../Svgs';

const Info = ({
  title, period, location, description, company
}) => {
  const [info, showInfo] = useState(false);
  return (
    <article className="info" role="presentation" onClick={() => showInfo(!info)} onKeyDown={() => showInfo(!info)}>
      <header className="info__header">
        <div className="info__longinfo">
          <button type="button" className="info__btn">
            {info ? <Minus /> : <Plus />}
          </button>
          <h4>{title}</h4>
        </div>
        <div className="info__shortinfo">
          <p className="info__period">{period}</p>
          <p className="info__location">{company}</p>
          <p className="info__location">{location}</p>
        </div>

      </header>
      <AnimatePresence>

        {info && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="info__description"
        >
          {description}
        </motion.p>
        )}
      </AnimatePresence>
    </article>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
export default Info;
