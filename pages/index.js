import Link from 'next/link';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { Portfolio } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';

export default function Home() {
  const easing = [0.5, 1, 0.89, 1];
  const fadeInSide = {
    initial: {
      x: -200,

    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  const easint2 = [0.34, 1.56, 0.64, 1];
  const fadeInRight = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easint2,
      },
    },
  };
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="main"
    >
      <div className="main__container">
        <Head>
          <title>Vitalie Melnic Porfolio Website</title>
          <meta
            name="description"
            content="Vitalie Melnic Porfolio website vmwhoami vmwhoiam"
          />

        </Head>
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
              I'm a developer focused on crafting
              clean &amp; user‑friendly experiences, I am
              passionate about building excellent
              software that improves the lives of those
              around me.
            </p>

            <Link href="/portfolio">
              <button type="button" className="mybutton">
                <span className="mybutton__span">Portfolio</span>
                <i className="mybutton__icon">
                  <Portfolio />
                </i>
              </button>
            </Link>

            <SocialLinks />
          </motion.div>
        </div>
      </div>

    </motion.main>
  );
}
