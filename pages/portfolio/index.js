import { motion } from 'framer-motion';
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
      y: 200,
      opacity: 0.2,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.34, 1.56, 0.64, 1],
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
          _id: id, title, description, image,
        }) => (

          <motion.article variants={item} key={id} className="post_container  ">
            <PortThumb
              image={image}
              id={id}
              title={title}
              convertTitle={convertTitle}
            />
            <PortContent
              title={title}
              description={description}
              id={id}
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
