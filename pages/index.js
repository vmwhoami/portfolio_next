"use client";

import Head from "next/head";
import path from "path";
import fs from "fs";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SocialLinks from "../components/smallComponents/SocialLinks";
import {
  fadeInSide,
  fadeInRight,
} from "../components/animations/indexAnimations";

export default function Home({ intro, heading, name, description }) {
  return (
    <motion.main
      className="w-full min-h-screen flex justify-center items-center
    bg-[linear-gradient(75deg,#4169e1_0%,#4169e1_25%,#111_25%,#111_100%)]
    md:bg-[linear-gradient(75deg,#4169e1_0%,#4169e1_25%,#111_25%,#111_100%)]"
    >
      <div className="flex flex-col justify-center items-center px-6 py-10 md:flex-row md:items-center">
        <Head>
          <title>Vitalie Melnic Portfolio Website</title>
          <meta
            name="description"
            content="Vitalie Melnic Portfolio website vmwhoami vmwhoiam"
          />
        </Head>

        <motion.div
          variants={fadeInSide}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-[18rem] h-[18rem] mt-10 rounded-full border-8 border-[#2b2a2a] overflow-hidden shadow-lg md:w-[50vw] md:h-[calc(100vh-6rem)] md:rounded-3xl md:border-none md:mt-0"
        >
          <img
            alt="Vitalie Melnic"
            className="w-full h-full object-cover rounded-full md:rounded-3xl"
            src="./pictures/izit.jpg"
          />
        </motion.div>

        <div className="w-full h-full flex justify-center items-end">
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="mt-10 text-center w-[80vw] text-[#f8f8f8] md:text-left md:w-[40rem] lg:w-[50rem]"
          >
            <section className="space-y-6">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl font-bold uppercase">
                My name is <span className="text-[#4169e1]">Vitalie</span>
              </h1>

              {/* Nickname Explanation */}
              <p className="text-sm md:text-base text-gray-300">
                Also known online as <strong>nickpon</strong> on GitHub
                (vmwhoami), inspired by the classic "Who Am I" Linux command and
                the Jackie Chan movie.
              </p>

              <div className="space-y-4 text-[1rem] md:text-[1.6rem] md:leading-[2.5rem]">
                <p>
                  I am a <strong>full-stack web developer</strong>, content
                  creator, and former professional dancer with a passion for
                  technology, creativity, and storytelling.
                </p>

                <p>
                  For over <em>3.5 years</em>, I’ve been building scalable
                  applications using <code>Ruby on Rails</code>,{" "}, <code>FastAPI</code>
                  <code>Vue.js</code>, and <code>Docker</code>. I love solving
                  complex problems, refining backend logic, and crafting smooth
                  front‑end experiences.
                </p>

                <p>
                  But my journey started long before coding. From{" "}
                  <strong>2010 to 2018</strong>, I performed professionally as a
                  dancer in Moldova, Romania, and China—while also designing
                  websites, editing videos, and creating promo materials for my
                  team.
                </p>

                <p>
                  That hands-on combo of <em>Photoshop</em>,{" "}
                  <em>Premiere Pro</em>, <em>Illustrator</em>, and web
                  development gave me a unique lens: blending art with code.
                </p>

                <p>
                  In <strong>2020</strong>, I dove head-first into
                  tech—graduating from Microverse’s rigorous remote bootcamp,
                  then working as a Technical Support Engineer to help students
                  sharpen their code.
                </p>

                <p>
                  Since then, I’ve shipped web apps, APIs, and polished
                  front‑ends… all while running my YouTube channel, where I
                  tackle societal change, deep dives, and big philosophical
                  questions.
                </p>

                <p>
                  I thrive on <strong>continuous learning</strong> and{" "}
                  <strong>pushing boundaries</strong>—whether it’s writing
                  clean, scalable code, producing engaging digital content, or
                  exploring the latest tech frontiers.
                </p>
              </div>
              <div className="mt-6 flex justify-center md:justify-start">
                <SocialLinks />
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), "page_text", "main_text.json");
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
  intro: "",
  heading: "",
  name: "",
  description: "",
};
