import PropTypes from 'prop-types';
import { Github, Earth } from '../Svgs';

const LiveLinks = ({ link }) => {

  const checkGithub = (link) => {
    return /github/.test(link)
  }
  return (
    <a target="_blank" className="links__container" rel="noreferrer" href={link}>
      <span className="links__text">{checkGithub(link) ? 'Github' : 'Live'}</span>
      <i className="links__icon">
        {checkGithub(link) ? <Github /> : <Earth />}
      </i>
    </a>
  )

};
LiveLinks.propTypes = {
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,

};
export default LiveLinks;
