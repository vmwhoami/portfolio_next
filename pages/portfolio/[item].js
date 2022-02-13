import Link from 'next/link';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Back } from '../../components/Svgs';

import Heading from '../../components/smallComponents/Heading';
import LiveLinks from '../../components/portfoliocomp/LiveLinks';

function PortfolioItem({ portfolio }) {
  if (!portfolio) {
    return <h1>Loading..</h1>;
  }
  const {
    title, image, githubLink, liveLink, description, technologies,
  } = portfolio;

  const links = [githubLink, liveLink];
  const genKeys = () => Math.random().toString(36).slice(2, 9);

  return (
    <div className="container">
      <Heading white={title} color="" bg="Portfolio" />
      <div className="portItemCont">
        <div className="imgcontainer">
          <img className="imgcontainer__img " src={image} alt={title} />
        </div>
        <div className="content">
          <h2 className="content__h3">{title}</h2>
          <ReactMarkdown>{description}</ReactMarkdown>
          <h3>Technologies used:</h3>
          <hr className="white-line " />
          <div className="technologies">
            {technologies.map((technology) => <span key={genKeys()}>{technology}</span>)}
          </div>
          <hr className="white-line " />
          <div className="links">
            {links.map((link) => <LiveLinks key={genKeys()} link={link} />)}
            <Link href="/portfolio">
              <button type="button" className="links__container">
                <span className="links__text">back</span>
                <i className="links__icon"><Back /></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  portfolio: PropTypes.instanceOf(Object).isRequired,
};

export async function getStaticProps(context) {
  const title = context.params.item;
  const url = `https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios/${title}`;
  const res = await axios({
    method: 'GET', url, headers: {},
  });
  const data = res.data.data[0];
  return {
    props: { portfolio: data }, revalidate: 10,
  };
}
export async function getStaticPaths() {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios';
  const data = await axios.get(url);
  const { portfolios } = data.data.data;
  /* eslint-disable-next-line */
  const paths = portfolios.map((p) => ({ params: { item: p.slug.toString() } }));

  return {
    paths,
    fallback: true,
  };
}
export default PortfolioItem;
