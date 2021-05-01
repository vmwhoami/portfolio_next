import Link from 'next/link';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Back } from '../../components/Svgs';

import Heading from '../../components/smallComponents/Heading';
import LiveLinks from '../../components/portfoliocomp/LiveLinks';

function PortfolioItem({ portfolio }) {
  if (!portfolio.data) {
    return <h1>Loading..</h1>;
  }
  const {
    title, image, githubLink, liveLink, description, technologies,
  } = portfolio.data;
  const links = [githubLink, liveLink];
  const genKeys = () => Math.random().toString(36).slice(2, 9);

  return (
    <div className="container">
      <Heading
        white={title}
        color=""
        bg="Portfolio"
      />
      <div className="portItemCont">
        <div className="imgcontainer">
          <img
            className="imgcontainer__img "
            src={image}
            alt={title}
          />
        </div>
        <div className="content">

          <h2 className="content__h3">
            {title}
          </h2>
          <p>{description}</p>

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
                <i className="links__icon">
                  <Back />
                </i>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

PortfolioItem.defaultProps = {
  portfolio: {
    data: {
      title: '',
      image: '',
      githubLink: '',
      liveLink: '',
      description: '',
      technologies: [],
    },
  },
};
PortfolioItem.propTypes = {
  portfolio: PropTypes.instanceOf(Object),
};
export async function getStaticProps(context) {
  const id = context.params.item;
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios/1';
  const res = await axios({
    method: 'GET', url, headers: {}, data: { id },
  });
  return {
    props: { portfolio: res.data }, revalidate: 10,
  };
}
export async function getStaticPaths() {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios';
  const data = await axios.get(url);
  const { portfolios } = data.data.data;
  const paths = portfolios.map((p) => ({ params: { item: p._id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}
export default PortfolioItem;
