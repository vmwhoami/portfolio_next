import PropTypes from 'prop-types';
import { Github, Earth } from '../Svgs';

const LiveLinks = ({
  liveLink, githubLink, live,
}) => (
  <a target="_blank" className="links__container" rel="noreferrer" href={liveLink || githubLink}>
    <span className="links__text">{live ? 'Live' : 'Github'}</span>
    <i className="links__icon">
      {live ? <Earth /> : <Github />}
    </i>
  </a>
);
LiveLinks.propTypes = {
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,

};
export default LiveLinks;
