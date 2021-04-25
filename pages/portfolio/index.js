import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Heading from '../../components/smallComponents/Heading';
import PortContent from '../../components/portfoliocomp/portContent';
import PortThumb from '../../components/portfoliocomp/portThumb';

function Portfolio() {
  const reducer = useSelector((state) => state.portfolioReducer.items);
  if (reducer < 1) {
    return <h1>Loading</h1>;
  }
  const { portfolios } = reducer.data;

  const container = {
    hidden: {
      y: 200,
      opacity: .2
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

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

        className="grid-container">
        {portfolios.map(({
          _id: id, title, description, image,
        }) => (

          <motion.article variants={item} key={id} className="post_container  ">
            <PortThumb image={image} id={id} />
            <PortContent title={title} description={description} id={id} />
          </motion.article>

        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;
