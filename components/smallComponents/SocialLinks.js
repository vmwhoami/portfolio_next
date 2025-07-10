import { motion } from 'framer-motion';
import {
  Github,
  LinkedIn,
  Twitter,
  CV,
} from '../Svgs';

function SocialLinks() {
  const container = {
    hidden: {
       opacity: 0,
    },
    show: {
       opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="social__container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="social">
        <motion.a
          variants={item}
          target="_blank"
          className="social__link"
          href="https://www.linkedin.com/in/vitaliemelnic/" rel="noreferrer">
          <i className="social__icon">
            <LinkedIn />
          </i>
        </motion.a>
        
        <motion.a
          variants={item}
          target="_blank"
          className="social__link"
          href="https://github.com/vmwhoami"
          rel="noreferrer">
          <i className="social__icon">
            <Github />
          </i>
        </motion.a>
        
        <motion.a variants={item}
                  target="_blank"
                  className="social__link"
                  href="https://x.com/vmwhoami"
                  rel="noreferrer">
          <i className="social__icon">
            <Twitter />
          </i>
        </motion.a>
        
        <motion.a variants={item} 
                  download 
                  className="social__link" 
                  href="/my_cv.pdf" 
                  rel="noreferrer">
          <i className="social__icon">
            <CV />
          </i>
        </motion.a>
       </motion.div>
    </div>
  );
}

export default SocialLinks;