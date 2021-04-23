import Link from 'next/link';
import { useSelector } from 'react-redux';
import Heading from "../../components/smallComponents/Heading";

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
          _id: id, title, description, technologies, image
        }) => (
          <article key={id} className="post_container  ">
            <h1>{title}</h1>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
