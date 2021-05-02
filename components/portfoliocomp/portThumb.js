import PropTypes from 'prop-types';
import Link from 'next/link';

const PortThumb = ({
  id, image, title,
}) => (
  <div className="post_thumb ">
    <Link href={`/portfolio/${id}`}>
      <button type="button" className="link_container">
        <img className="img_fluid" src={image} alt={title} />
      </button>
    </Link>
  </div>
);

PortThumb.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default PortThumb;
