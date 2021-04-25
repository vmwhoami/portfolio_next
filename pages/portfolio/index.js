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
  const stagger = {
    animate: {
      transition: {
        staggerChildren: .2
      }
    }
  }
  return (
    <div className="container">
      <Heading
        white="My"
        color="Portfolio"
        bg="Work"
      />
      <div className="grid-container">
        {portfolios.map(({
          _id: id, title, description, image,
        }) => (

          <motion.article initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: .6
              }
            }}


            key={id} className="post_container  ">
            <PortThumb image={image} id={id} />
            <PortContent title={title} description={description} id={id} />
          </motion.article>

        ))}
      </div>
    </div>
  );
}

export default Portfolio;
