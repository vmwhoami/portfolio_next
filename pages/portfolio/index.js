import Link from 'next/link';
import { useSelector } from 'react-redux';
import Heading from "../../components/smallComponents/Heading";
import PortContent from "../../components/portfoliocomp/portContent";
import PortThumb from "../../components/portfoliocomp/portThumb";

function Portfolio() {
  const items = useSelector((state) => state.portfolioReducer.items.data.portfolios);
  return (
    <div className="container">
      <Heading
        white="My"
        color="Portfolio"
        bg="Work"
      />
      <div className="grid-container">
        {items.map(({
          _id: id, title, description, image
        }) => (
          <article key={id} className="post_container  ">
            <PortThumb image={image} id={id} />
            {/* <PortContent title={title} description={description} id={id} /> */}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
