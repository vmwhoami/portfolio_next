import Link from 'next/link';
import { Back } from '../../components/Svgs';
import Heading from '../../components/smallComponents/Heading';
import LiveLinks from '../../components/portfoliocomp/LiveLinks';
import axios from 'axios';
function PortfolioItem(props) {

  if (!props?.portfolio.data) {
    return <h1>Loading..</h1>
  }
  const {
    title, image, githubLink, liveLink, description, technologies
  } = props.portfolio.data;
  const links = [githubLink, liveLink]

  return (
    <div className="container">
      <Heading
        white={title}
        color=""
        bg="Portfolio"
      />

      <div className="portItemCont">
        <div className="imgcontainer">
          <img className="imgcontainer__img " src={image} />
        </div>
        <div className="content">

          <h3 className="content__h3">
            {title}
          </h3>
          <p>{description}</p>

          <hr className="white-line " />
          <div className="links">
            {links.map(link => <LiveLinks key={link} link={link} />)}

            <Link href="/portfolio">
              <a className="links__container">
                <span className="links__text">back </span>
                <i className="links__icon">
                  <Back />
                </i>
              </a>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.item
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios/1'
  const res = await axios({ method: 'GET', url: url, headers: {}, data: { id: id } });
  return {
    props: { portfolio: res.data }, revalidate: 10
  }
}
export async function getStaticPaths() {
  const url = 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/portfolios'
  const data = await axios.get(url)
  const { portfolios } = data.data.data
  const paths = portfolios.map(p => ({ params: { item: p._id.toString() } }))

  return {
    paths,
    fallback: true
  }
}
export default PortfolioItem;
