import { Github, LinkedIn, Twitter } from '../Svgs';

function SocialLinks() {
  return (
    <div className="social__container">
      <div className="social">
        <a target="_blank" className="social__link" href="https://www.linkedin.com/in/vitaliemelnic/" rel="noreferrer">
          <i className="social__icon">
            <LinkedIn />
          </i>
        </a>

        <a target="_blank" className="social__link" href="https://github.com/vmwhoami" rel="noreferrer">
          <i className="social__icon">
            <Github />
          </i>
        </a>

        <a target="_blank" className="social__link" href="https://twitter.com/vmwhoami" rel="noreferrer">
          <i className="social__icon">
            <Twitter />
          </i>
        </a>

      </div>
    </div>
  );
}

export default SocialLinks;
