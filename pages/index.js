// import Link from 'next/link';
"use client";

import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// import { Portfolio } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';
import { fadeInSide, fadeInRight } from '../components/animations/indexAnimations';

export default function Home({
  intro, heading, name, description,
}) {
  return (
    <motion.main className="main">
      <div className="main__container">
        <Head>
          <title>Vitalie Melnic Porfolio Website</title>
          <meta name="description" content="Vitalie Melnic Porfolio website vmwhoami vmwhoiam" />
        </Head>
        <motion.div variants={fadeInSide} initial="initial" animate="animate" exit="exit" className="image">
          <img alt="Vitalie Melnic" className="image__img" src="./pictures/portfolio.jpg" />
        </motion.div>

        <div className="about">
          <motion.div variants={fadeInRight} initial="initial" animate="animate" className="about__container">
            <p className="about__intro">{intro}</p>
            <h1 className="about__heading">
              {heading}
              <span className="about__name">{name}</span>
            </h1>
            <p className="about__description">{description}</p>
            {/* <Link href="/portfolio">
              <button type="button" className="mybutton">
                <span className="mybutton__span">Portfolio</span>
                <i className="mybutton__icon">
                  <Portfolio />
                </i>
              </button>
            </Link> */}
            <SocialLinks />
          </motion.div>
        </div>
      </div>

    </motion.main>
  );
}

export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), 'page_text', 'main_text.json');
  const jsonData = await fs.readFileSync(filepath);
  const data = JSON.parse(jsonData);
  return {
    props: data,
  };
};

Home.propTypes = {
  intro: PropTypes.string,
  heading: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Home.defaultProps = {
  intro: '',
  heading: '',
  name: '',
  description: '',
};
