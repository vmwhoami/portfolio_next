import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Back } from '../../components/Svgs';
import Heading from '../../components/smallComponents/Heading';
import LiveLinks from '../../components/portfoliocomp/LiveLinks';

function PortfolioItem() {
  const router = useRouter();
  const pathname = router.query.item;
  const reducer = useSelector((state) => state.portfolioReducer.items);
  if (reducer < 1) {
    return <h1>Loading</h1>;
  }
  const { portfolios } = reducer.data;

  const item = portfolios.find((item) => item._id === pathname);
  const {
    title, image, githubLink, liveLink, description,
  } = item;
  return (
    <div className="container">
      <Heading
        white=""
        color={title}
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
            <LiveLinks githublink={githubLink} />
            <LiveLinks liveLink={liveLink} live />
            <Link href="/portfolio">
              <a className="links__container">
                <span className="links__text">back to portfolios</span>
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

export default PortfolioItem;
