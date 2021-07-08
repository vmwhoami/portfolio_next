import { motion } from 'framer-motion';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Heading from '../../components/smallComponents/Heading';
import PortContent from '../../components/portfoliocomp/portContent';
import PortThumb from '../../components/portfoliocomp/portThumb';

function Portfolio({ data }) {
  if (!data) {
    return <h1>Loading..</h1>;
  }
  const { portfolios } = data;
  const container = {
    hidden: {
      scale: 2,
      opacity: 0.7,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: [0.34, 1.2, 0.64, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const convertTitle = (title) => title.trim().toLowerCase().split(' ').join('-');
  return (
    <div className="container">
      <Head>
        <title>Vitalie Melnic Porfolios</title>
        <meta
          name="description"
          content="Vitalie Melnic webdeveloper portfolios"
        />

      </Head>

      <Heading
        white="My"
        color="Portfolio"
        bg="Work"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid-container"
      >
        {portfolios.map(({
          _id: id, title, description, image, slug,
        }) => (

          <motion.article variants={item} key={id} className="post_container  ">
            <PortThumb
              image={image}
              id={id}
              slug={slug}
              title={title}
              convertTitle={convertTitle}
            />
            <PortContent
              title={title}
              description={description}
              id={id}
              slug={slug}
              convertTitle={convertTitle}
            />
          </motion.article>

        ))}
      </motion.div>
    </div>
  );
}

Portfolio.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,

};

export default Portfolio;

export async function getStaticProps() {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios';
  const res = await fetch(url);
  const response = await res.json();

  return { props: response, revalidate: 10 };
}
