import PropTypes from 'prop-types';
import { Github, Earth } from '../Svgs';

const LiveLinks = (props) => {

  const { liveLink, githubLink } = props
  if (liveLink) {
    return (
      <a target="_blank" className="links__container" rel="noreferrer" href={liveLink}>
        <span className="links__text">Live</span>
        <i className="links__icon">
          <Earth />
        </i>
      </a>
    )
  } else {
    return (
      <a target="_blank" className="links__container" rel="noreferrer" href={githubLink}>
        <span className="links__text">Github</span>
        <i className="links__icon">
          <Github />
        </i>
      </a>
    )
  }
};
LiveLinks.propTypes = {
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,

};
export default LiveLinks;
