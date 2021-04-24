import Link from 'next/link';
import { Portfolio } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';
import { motion } from 'framer-motion'
export default function Home() {
  const easing = [0.5, 1, 0.89, 1]
  const fadeInSide = {
    initial: {
      x: -200,

    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .6,
        ease: easing
      }
    }
  }

  const fadeInRight = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .6,
        ease: easing
      }
    }
  }
  return (
    <motion.main initial="initial" animate="animate" className="main">
      <div className="main__container">
        <motion.div variants={fadeInSide} className="image">
          <img
            alt="Vitalie Melnic"
            className="image__img"
            src="./pictures/portfolio.jpg"
          />
        </motion.div>

        <div className="about">
          <motion.div variants={fadeInRight} className="about__container">
            <p className="about__intro">Hi there! </p>

            <h1 className="about__heading">
              I'm
              <span className="about__name">Vitalie Melnic</span>
            </h1>

            <p className="about__description">
              I'm a developer focused on crafting clean &amp; user‑friendly experiences, I am
              passionate about building excellent software that improves the lives of those around me.
            </p>

            <Link href="/portfolio">
              <a className="mybutton">
                <span className="mybutton__span">Portfolio</span>
                <i className="mybutton__icon">
                  <Portfolio />
                </i>
              </a>
            </Link>

            <SocialLinks />
          </motion.div>
        </div>
      </div>

    </motion.main>
  );
}
