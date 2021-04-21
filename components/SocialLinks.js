import { LinkedIn, Twitter, Github } from './Svgs';

const SocialLinks = () => (
  <div className="social__container">
    <div className="social">
      <a target="_blank" className="social__link" href="https://www.linkedin.com/in/vitaliemelnic/">
        <i className="social__icon">
          <LinkedIn />
        </i>
      </a>

      <a target="_blank" className="social__link" href="https://github.com/vmwhoami">
        <i className="social__icon">
          <Github />
        </i>
      </a>

      <a target="_blank" className="social__link" href="https://twitter.com/vmwhoami">
        <i className="social__icon">
          <Twitter />
        </i>
      </a>

    </div>
  </div>
);
export default SocialLinks;
