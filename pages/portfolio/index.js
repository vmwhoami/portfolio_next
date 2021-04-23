import { useSelector } from 'react-redux';
import Heading from "../../components/smallComponents/Heading";
import PortContent from "../../components/portfoliocomp/portContent";
import PortThumb from "../../components/portfoliocomp/portThumb";

function Portfolio() {
  const reducer = useSelector((state) => state.portfolioReducer.items);
  if (reducer < 1) {
    return <h1>Loading</h1>
  } else {
    const { portfolios } = reducer.data

    return (
      <div className="container">
        <Heading
          white="My"
          color="Portfolio"
          bg="Work"
        />
        <div className="grid-container">
          {portfolios.map(({
            _id: id, title, description, image
          }) => (
            <article key={id} className="post_container  ">
              <PortThumb image={image} id={id} />
              <PortContent title={title} description={description} id={id} />
            </article>
          ))}
        </div>
      </div>
    );
  }

}

export default Portfolio;
