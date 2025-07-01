import PropTypes from "prop-types";
import Link from "next/link";
import { Github, Earth } from "../Svgs";

const LiveLinks = ({ link }) => {
  const checkGithub = (link) => /github/.test(link);
  return (
    <Link target="_blank"
          className="links__container"
          rel="noreferrer"
          href={link}>
      <span className="links__text">
        {checkGithub(link) ? "Github" : "Live"}
      </span>
      <i className="links__icon">
        {checkGithub(link) ? <Github /> : <Earth />}
      </i>
    </Link>
  );
};
LiveLinks.propTypes = {
  link: PropTypes.string.isRequired,
};
export default LiveLinks;
